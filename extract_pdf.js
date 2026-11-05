const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/new price list.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_text.txt', data.text, 'utf8');
    console.log("PDF text extracted");
});
