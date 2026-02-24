import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'assets', 'images');

// Ensure directories exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Map of Firebase URLs to clean filenames
const imageMap = {
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/Preview.png?alt=media&token=8f5fc3da-4061-494c-adb3-d61dc664a6af': 'og-preview.png',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/3%20(1).png?alt=media&token=50212f13-6a4a-41fd-96f7-f6051ca83cdf': 'gold-market-analysis.png',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/gold.png?alt=media&token=2df54300-9089-416b-8f50-4cd359b415c0': 'gold.png',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/Silver.png?alt=media&token=05a8833b-11de-49cf-9bd9-bb9a66262237': 'silver.png',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/Silver.webp?alt=media&token=0b839625-c1ce-47e6-949c-8f3558851e4a': 'silver.webp',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/energy.webp?alt=media&token=0010fb53-ed53-4db8-bfa9-5d9f0861294a': 'energy.webp',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/Platinum.webp?alt=media&token=b441ad40-068c-4f23-ab16-35b1e6fe8efd': 'platinum.webp',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/goldnft.webp?alt=media&token=c19f8f79-2476-4e77-85e4-ee5ba4b44cbe': 'gold.webp',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/Diamond.webp?alt=media&token=1876dfcf-0ed8-4ddd-9162-ecfe7f94ae9e': 'diamond.webp',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/Carbon%20credit.webp?alt=media&token=db47af1a-fc66-4730-8ac8-f54f88aed70d': 'carbon-credit.webp',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/1111.png?alt=media&token=d38b8055-90b1-4321-9335-5ffe38dc47f8': 'mission-infrastructure.png',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/12222.png?alt=media&token=2b5c9bdf-77ed-4861-aa6a-e33a97b9530e': 'experience-tokenization.png',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/vision.webp?alt=media&token=8756afaf-f5c7-437d-a47b-e02773d8bdb6': 'vision.webp',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/mission.webp?alt=media&token=8ed05a33-2ee7-4fdb-a7d8-3af498dac2ae': 'mission.webp',
  'https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/business%20insider%20banner.jpg?alt=media&token=d9636a86-8456-4d84-9926-bb444a32a143': 'business-insider-banner.jpg',
};

async function downloadImage(url, filename) {
  const filePath = path.join(imagesDir, filename);
  
  // Skip if already exists
  if (fs.existsSync(filePath)) {
    console.log(`✓ Already exists: ${filename}`);
    return;
  }

  try {
    console.log(`Downloading: ${filename}...`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));
    console.log(`✓ Downloaded: ${filename}`);
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error.message);
  }
}

async function downloadAll() {
  console.log('Starting download of external images...\n');
  
  for (const [url, filename] of Object.entries(imageMap)) {
    await downloadImage(url, filename);
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n✓ Download complete!');
  console.log(`Images saved to: ${imagesDir}`);
}

downloadAll().catch(console.error);

