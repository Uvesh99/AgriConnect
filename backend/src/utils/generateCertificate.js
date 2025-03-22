// import PDFDocument from 'pdfkit';
// import fs from 'fs';
// import path from 'path';

// export const generateCertificate = async ({ name, regNo, issueDate, expiryDate }) => {
//   return new Promise((resolve, reject) => {
//     const doc = new PDFDocument();
//     const filePath = path.join('uploads', `certificate_${regNo}.pdf`);

//     doc.pipe(fs.createWriteStream(filePath));

//     doc.fontSize(24).text("FARMER VERIFICATION CERTIFICATE", { align: 'center' }).moveDown();
//     doc.fontSize(18).text(`Name: ${name}`).moveDown();
//     doc.fontSize(18).text(`Registration No: ${regNo}`).moveDown();
//     doc.fontSize(18).text(`Issue Date: ${new Date(issueDate).toDateString()}`).moveDown();
//     doc.fontSize(18).text(`Expiry Date: ${new Date(expiryDate).toDateString()}`).moveDown();
//     doc.fontSize(14).text(`Certified by Agricultural Department`, { align: 'center' });

//     doc.end();

//     doc.on('finish', () => resolve(filePath));
//     doc.on('error', (err) => reject(err));
//   });
// };


import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export const generateCertificate = async ({ name, regNo, issueDate, expiryDate }) => {
  return new Promise((resolve, reject) => {
    const uploadsDir = path.join('uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, `certificate_${regNo}.pdf`);
    const stream = fs.createWriteStream(filePath);

    const doc = new PDFDocument();
    doc.pipe(stream);

    doc.fontSize(24).text("FARMER VERIFICATION CERTIFICATE", { align: 'center' }).moveDown();
    doc.fontSize(18).text(`Name: ${name}`).moveDown();
    doc.fontSize(18).text(`Registration No: ${regNo}`).moveDown();
    doc.fontSize(18).text(`Issue Date: ${new Date(issueDate).toDateString()}`).moveDown();
    doc.fontSize(18).text(`Expiry Date: ${new Date(expiryDate).toDateString()}`).moveDown();
    doc.fontSize(14).text(`Certified by Agricultural Department`, { align: 'center' });

    doc.end();

    // Ensure file is fully written before proceeding
    stream.on('finish', () => {
      console.log(`✅ PDF successfully created at: ${filePath}`);
      resolve(filePath);
    });

    stream.on('error', (err) => {
      console.error('❌ PDF Generation Error:', err);
      reject(err);
    });
  });
};
