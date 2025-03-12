const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrls = {
    // 基礎圖片
    'logo.png': 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&h=60&fit=crop',
    'hero-banner.jpg': 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=1920&h=600&fit=crop',
    
    // 環境照片
    'classroom-1.jpg': 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
    'classroom-2.jpg': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
    'facility-1.jpg': 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop',
    'facility-2.jpg': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    
    // 教學相關
    'study-group.jpg': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
    'teaching-method.jpg': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    'homework-help.jpg': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
};

const downloadImage = (url, filename) => {
    const filepath = path.join(__dirname, 'public', 'images', filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${filename}`);
        });
    }).on('error', err => {
        fs.unlink(filepath, () => {});
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
};

// 確保目錄存在
if (!fs.existsSync(path.join(__dirname, 'public', 'images'))) {
    fs.mkdirSync(path.join(__dirname, 'public', 'images'), { recursive: true });
}

// 下載所有圖片
Object.entries(imageUrls).forEach(([filename, url]) => {
    downloadImage(url, filename);
}); 