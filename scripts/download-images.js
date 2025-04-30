const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', reject);
    }).on('error', reject);
  });
};

const images = {
  '/avatars/alex-avatar.jpg': 'https://picsum.photos/200',
  '/avatars/explorer-avatar.jpg': 'https://picsum.photos/201',
  '/posts/eiffel-tower.jpg': 'https://picsum.photos/1200/900',
  '/posts/angkor-wat.jpg': 'https://picsum.photos/1201/900'
};

async function downloadAllImages() {
  for (const [filepath, url] of Object.entries(images)) {
    const fullPath = path.join(__dirname, '../public', filepath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    console.log(`Downloading ${filepath}...`);
    await downloadImage(url, fullPath);
    console.log(`Downloaded ${filepath}`);
  }
}

downloadAllImages().catch(console.error); 