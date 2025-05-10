#!/usr/bin/env node
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  try {
    const imagesDir = path.resolve(__dirname, '..', 'public', 'img');
    const pattern = path.join(imagesDir, '*.{jpg,JPG,jpeg,JPEG,png,PNG}');

    glob(pattern, async (err, files) => {
      if (err) throw err;
      if (files.length === 0) {
        console.log('No images found.');
        return;
      }

      const metadataList = await Promise.all(
        files.map(file => sharp(file).metadata())
      );

      const dimensions = metadataList.map(meta => `${meta.width}x${meta.height}`);
      const uniqueDims = [...new Set(dimensions)];

      if (uniqueDims.length === 1) {
        console.log(`All ${files.length} images are ${uniqueDims[0]}`);
      } else {
        console.log('Images have varying dimensions:');
        uniqueDims.forEach(dim => {
          const count = dimensions.filter(d => d === dim).length;
          console.log(`  ${count} images are ${dim}`);
        });
      }
    });
  } catch (e) {
    console.error('Error checking image sizes:', e);
    process.exit(1);
  }
})(); 