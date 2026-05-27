import fs from 'fs';
import https from 'https';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 303) {
            return download(res.headers.location, dest).then(resolve).catch(reject);
        }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
        fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
    await download('https://drive.google.com/uc?export=download&id=1qV1Vhv3h3QkjxZtPM2j415m8_uDQYOEg', '/app/applet/public/images/hero.jpg');
    await download('https://drive.google.com/uc?export=download&id=1taeAl_-UZ-IHF-WcDYOkhicFHVaCB0C7', '/app/applet/public/images/sobre.jpg');
    await download('https://drive.google.com/uc?export=download&id=1T56AFWEQav7bShhEaczw2yBOKxlHmYzp', '/app/applet/public/images/servicos.jpg');
    await download('https://drive.google.com/uc?export=download&id=1RW49R5W7KVdZ3_062i_IOAjQ7z5sABIi', '/app/applet/public/images/localizacao.jpg');
    await download('https://drive.google.com/uc?export=download&id=1IzvidKZfk6247F4UNN6pHeiKnYepjnx9', '/app/applet/public/images/comprovacao.jpg');
    console.log("Downloads finished");
}
run();
