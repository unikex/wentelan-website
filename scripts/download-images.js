const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrls = {
  'hero-banner.jpg': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop',
  'classroom-1.jpg': 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop',
  'classroom-2.jpg': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
  'study-group.jpg': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
  'facility-1.jpg': 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
  'facility-2.jpg': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
  'logo.png': 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&h=60&fit=crop',
  'pattern.svg': 'https://raw.githubusercontent.com/pattern-lib/pattern-lib/main/patterns/circuit-board.svg'
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '..', 'public', 'images', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {});
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
};

// 確保目錄存在
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 下載所有圖片
Promise.all(
  Object.entries(imageUrls).map(([filename, url]) => downloadImage(url, filename))
)
  .then(() => console.log('All images downloaded successfully'))
  .catch(err => console.error('Error downloading images:', err)); 