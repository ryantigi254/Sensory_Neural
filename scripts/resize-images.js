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

      const minWidth = Math.min(...metadataList.map(meta => meta.width));
      const minHeight = Math.min(...metadataList.map(meta => meta.height));

      console.log(`Resizing ${files.length} images to ${minWidth}x${minHeight}`);

      await Promise.all(
        files.map(file =>
          sharp(file)
            .resize(minWidth, minHeight)
            .toFile(file)
        )
      );

      console.log('Done resizing images.');
    });
  } catch (e) {
    console.error('Error resizing images:', e);
    process.exit(1);
  }
})(); 