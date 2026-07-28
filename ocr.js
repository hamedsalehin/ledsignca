const fs = require('fs');
const Tesseract = require('tesseract.js');
const imagePath = process.argv[2];
console.log('Reading image:', imagePath);
Tesseract.recognize(
  imagePath,
  'eng'
).then(({ data: { text } }) => {
  console.log('====== OCR RESULT ======');
  console.log(text);
});

