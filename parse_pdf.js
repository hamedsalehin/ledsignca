const fs = require('fs');
const PDFParser = require('pdf2json');

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync('scratch/pdf_text.txt', pdfParser.getRawTextContent());
    console.log('PDF text extracted to scratch/pdf_text.txt');
});

pdfParser.loadPDF('public/new price list.pdf');
