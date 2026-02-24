#!/usr/bin/env node

/**
 * Script to convert PNG/JPG images to WebP format
 * Usage: node scripts/convert-images-to-webp.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

// Images to convert (excluding already WebP images)
const imageExtensions = ['.png', '.jpg', '.jpeg'];
const excludeDirs = ['node_modules', '.next', '.git'];

function shouldConvert(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return imageExtensions.includes(ext);
}

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${path.relative(publicDir, inputPath)} → ${path.relative(publicDir, outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip excluded directories
    if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && shouldConvert(fullPath)) {
      const webpPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      // Only convert if WebP doesn't already exist
      if (!fs.existsSync(webpPath)) {
        await convertToWebP(fullPath, webpPath);
      } else {
        console.log(`⊘ Skipped (WebP exists): ${path.relative(publicDir, fullPath)}`);
      }
    }
  }
}

async function main() {
  console.log('Starting image conversion to WebP...\n');
  
  if (!fs.existsSync(publicDir)) {
    console.error(`Error: ${publicDir} does not exist`);
    process.exit(1);
  }

  await processDirectory(publicDir);
  
  console.log('\n✓ Image conversion complete!');
  console.log('\nNote: Update your code to use .webp extensions where applicable.');
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
