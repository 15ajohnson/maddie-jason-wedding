import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs';
import { join, extname } from 'path';

const galleryDir = './public/gallery';
const extensions = ['.jpg', '.jpeg', '.png', '.webp'];

const files = readdirSync(galleryDir).filter(f => {
  const ext = extname(f).toLowerCase();
  return extensions.includes(ext) && statSync(join(galleryDir, f)).isFile();
});

console.log(`Found ${files.length} images to compress...\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const filePath = join(galleryDir, file);
  const ext = extname(file).toLowerCase();
  const sizeBefore = statSync(filePath).size;
  totalBefore += sizeBefore;

  try {
    const image = sharp(filePath);
    const meta = await image.metadata();

    // Resize if wider than 2400px, otherwise keep original dimensions
    const pipeline = meta.width > 2400 ? image.resize(2400) : image;

    let outputBuffer;
    if (ext === '.png') {
      outputBuffer = await pipeline.png({ compressionLevel: 9, quality: 85 }).toBuffer();
    } else {
      outputBuffer = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    }

    // Only overwrite if the compressed version is actually smaller
    if (outputBuffer.length < sizeBefore) {
      const tmpPath = filePath + '.tmp';
      await sharp(outputBuffer).toFile(tmpPath);
      renameSync(tmpPath, filePath);
      const sizeAfter = statSync(filePath).size;
      totalAfter += sizeAfter;
      const saved = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
      console.log(`✓ ${file}: ${(sizeBefore/1024/1024).toFixed(2)}MB → ${(sizeAfter/1024/1024).toFixed(2)}MB (-${saved}%)`);
    } else {
      totalAfter += sizeBefore;
      console.log(`- ${file}: already optimized, skipped`);
    }
  } catch (err) {
    totalAfter += sizeBefore;
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log(`\nDone!`);
console.log(`Before: ${(totalBefore/1024/1024/1024).toFixed(2)}GB`);
console.log(`After:  ${(totalAfter/1024/1024/1024).toFixed(2)}GB`);
console.log(`Saved:  ${((totalBefore - totalAfter)/1024/1024/1024).toFixed(2)}GB`);
