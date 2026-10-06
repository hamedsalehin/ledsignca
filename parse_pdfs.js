const fs = require('fs');
const PDFParser = require('pdf2json');
const dir = 'C:\\\\Users\\\\eskan\\\\.gemini\\\\antigravity-ide\\\\brain\\\\b9455b30-cff8-4372-bf6c-d25cdfb2f221\\\\.tempmediaStorage';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

files.forEach(file => {
  const pdfParser = new PDFParser(this, 1);
  pdfParser.on('pdfParser_dataError', errData => console.error(errData.parserError));
  pdfParser.on('pdfParser_dataReady', pdfData => {
    fs.appendFileSync('pdf_text.txt', '--- ' + file + ' ---\n' + pdfParser.getRawTextContent() + '\n\n');
  });
  pdfParser.loadPDF(dir + '\\\\' + file);
});

