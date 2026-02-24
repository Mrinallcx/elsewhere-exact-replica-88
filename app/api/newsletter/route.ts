import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Redis } from '@upstash/redis';

interface NewsletterData {
  emails: string[];
  lastUpdated: string;
  total: number;
}

// Initialize Redis client if environment variables are set
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

const STORAGE_KEY = 'newsletter-subscribers';

// Mark this route as dynamic to prevent static generation
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Helper function to read data
async function readData(): Promise<NewsletterData> {
  // If Redis is configured, use it (production)
  if (redis) {
    try {
      const data = await redis.get<NewsletterData>(STORAGE_KEY);
      if (data) {
        return data;
      }
    } catch (error) {
      console.error('Error reading from Redis:', error);
      // Fall through to default
    }
  }
  
  // Fallback to file system (development)
  const filePath = path.join(process.cwd(), 'newsletter-subscribers.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    // File doesn't exist, return empty structure
    return {
      emails: [],
      lastUpdated: new Date().toISOString(),
      total: 0,
    };
  }
}

// Helper function to write data
async function writeData(data: NewsletterData): Promise<void> {
  // If Redis is configured, use it (production)
  if (redis) {
    try {
      await redis.set(STORAGE_KEY, data);
      return;
    } catch (error) {
      console.error('Error writing to Redis:', error);
      throw new Error('Failed to save to database');
    }
  }
  
  // Fallback to file system (development)
  const filePath = path.join(process.cwd(), 'newsletter-subscribers.json');
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to file:', error);
    throw new Error('Failed to save subscription');
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Read existing data
    let data: NewsletterData;
    try {
      data = await readData();
    } catch (error) {
      console.error('Error reading data:', error);
      // If file doesn't exist or is empty, create new structure
      data = {
        emails: [],
        lastUpdated: new Date().toISOString(),
        total: 0,
      };
    }

    // Check if email already exists
    if (data.emails.includes(email.toLowerCase())) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Add new email
    data.emails.push(email.toLowerCase());
    data.total = data.emails.length;
    data.lastUpdated = new Date().toISOString();

    // Write back to file
    try {
      await writeData(data);
    } catch (error) {
      console.error('Error writing data:', error);
      // Log the error details for debugging
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        env: process.env.NODE_ENV,
        netlify: process.env.NETLIFY,
      });
      throw error;
    }

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter',
        total: data.total 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        error: 'Failed to process subscription',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

