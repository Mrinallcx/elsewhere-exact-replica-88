import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Redis } from '@upstash/redis';

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

async function readData() {
  // If Redis is configured, use it (production)
  if (redis) {
    try {
      const data = await redis.get(STORAGE_KEY);
      if (data) {
        return data;
      }
    } catch (error) {
      console.error('Error reading from Redis:', error);
      // Fall through to file system
    }
  }
  
  // Fallback to file system (development)
  const filePath = path.join(process.cwd(), 'newsletter-subscribers.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    throw new Error('No subscriber data found');
  }
}

export async function GET() {
  try {
    const data = await readData();

    // Generate filename with current date
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    const filename = `newsletter-subscribers-${today}.json`;

    // Return as downloadable JSON file
    return new NextResponse(JSON.stringify(data, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to download subscribers file' },
      { status: 500 }
    );
  }
}

