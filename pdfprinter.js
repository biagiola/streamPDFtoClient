const pdfMakePrinter = require('pdfmake/src/printer');
const path = require('path')

const generatePdfBase64 = (docDefinition, callback) => {

    try {
        const fontDescriptors = {
            Roboto: {
                normal: path.join(__dirname, '/fonts/Roboto-Regular.ttf'),
                bold: path.join(__dirname, '/fonts/Roboto-Medium.ttf'),
                italics: path.join(__dirname, '/fonts/Roboto-Italic.ttf'),
                bolditalics: path.join(__dirname, '/fonts/Roboto-MediumItalic.ttf'),
            },
        };
        const printer = new pdfMakePrinter(fontDescriptors);
        const doc = printer.createPdfKitDocument(docDefinition);
        callback(doc)
        
    } catch (error) {
        throw error;        
    }
}

module.exports = {
  generatePdfBase64,
};
