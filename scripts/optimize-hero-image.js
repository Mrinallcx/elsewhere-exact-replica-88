#!/usr/bin/env node

/**
 * Script to create optimized responsive versions of the hero fallback image
 * Usage: node scripts/optimize-hero-image.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const heroDir = path.join(publicDir, 'hero-background');
const inputImage = path.join(heroDir, 'fallbackbg.webp');

// Output paths
const desktopImage = path.join(heroDir, 'hero-desktop.webp');
const mobileImage = path.join(heroDir, 'hero-mobile.webp');

async function optimizeHeroImage() {
  console.log('Optimizing hero fallback image...\n');

  // Check if input image exists
  if (!fs.existsSync(inputImage)) {
    console.error(`Error: ${inputImage} does not exist`);
    process.exit(1);
  }

  try {
    // Get image metadata
    const metadata = await sharp(inputImage).metadata();
    const originalSize = (fs.statSync(inputImage).size / 1024).toFixed(2);
    console.log(`Original image: ${metadata.width}x${metadata.height} (${originalSize} KB)\n`);

    // Create desktop version: 1504x846 (2x for retina at 752x423)
    // Maintain aspect ratio, crop to fit
    console.log('Creating desktop version (1504x846)...');
    await sharp(inputImage)
      .resize(1504, 846, {
        fit: 'cover',
        position: 'center',
      })
      .webp({ 
        quality: 80,
        effort: 6 
      })
      .toFile(desktopImage);
    
    const desktopStats = fs.statSync(desktopImage);
    const desktopSize = (desktopStats.size / 1024).toFixed(2);
    console.log(`✓ Created: hero-desktop.webp (${desktopSize} KB)`);

    // Create mobile version: 480x850 (optimized for mobile devices like Moto G Power)
    // Reduced quality to 75 for smaller file size while maintaining visual quality
    console.log('\nCreating mobile version (480x850)...');
    await sharp(inputImage)
      .resize(480, 850, {
        fit: 'cover',
        position: 'center',
      })
      .webp({ 
        quality: 75,  // Reduced from 80 to 75 for smaller file size
        effort: 6 
      })
      .toFile(mobileImage);
    
    const mobileStats = fs.statSync(mobileImage);
    const mobileSize = (mobileStats.size / 1024).toFixed(2);
    console.log(`✓ Created: hero-mobile.webp (${mobileSize} KB)`);

    console.log('\n✓ Hero image optimization complete!');
    console.log('\nNext steps:');
    console.log('1. Update app/page.tsx to use responsive images');
    console.log('2. Update app/layout.tsx preload link to use hero-desktop.webp');
    console.log('3. Test the page and verify LCP improvement');
  } catch (error) {
    console.error('Error optimizing image:', error);
    process.exit(1);
  }
}

optimizeHeroImage();

