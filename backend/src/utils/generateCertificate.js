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


// import PDFDocument from 'pdfkit';
// import fs from 'fs';
// import path from 'path';

// export const generateCertificate = async ({ name, regNo, issueDate, expiryDate }) => {
//   return new Promise((resolve, reject) => {
//     const uploadsDir = path.join('uploads');
//     if (!fs.existsSync(uploadsDir)) {
//       fs.mkdirSync(uploadsDir, { recursive: true });
//     }

//     const filePath = path.join(uploadsDir, `certificate_${regNo}.pdf`);
//     const stream = fs.createWriteStream(filePath);

//     const doc = new PDFDocument();
//     doc.pipe(stream);

//     doc.fontSize(24).text("FARMER VERIFICATION CERTIFICATE", { align: 'center' }).moveDown();
//     doc.fontSize(18).text(`Name: ${name}`).moveDown();
//     doc.fontSize(18).text(`Registration No: ${regNo}`).moveDown();
//     doc.fontSize(18).text(`Issue Date: ${new Date(issueDate).toDateString()}`).moveDown();
//     doc.fontSize(18).text(`Expiry Date: ${new Date(expiryDate).toDateString()}`).moveDown();
//     doc.fontSize(14).text(`Certified by Agricultural Department`, { align: 'center' });

//     doc.end();

//     // Ensure file is fully written before proceeding
//     stream.on('finish', () => {
//       console.log(`✅ PDF successfully created at: ${filePath}`);
//       resolve(filePath);
//     });

//     stream.on('error', (err) => {
//       console.error('❌ PDF Generation Error:', err);
//       reject(err);
//     });
//   });
// };


// import { createCanvas, loadImage } from 'canvas';
// import fs from 'fs';
// import path from 'path';

// export const generateCertificate = async ({ name, regNo, issueDate, expiryDate }) => {
//   return new Promise(async (resolve, reject) => {
//     const width = 800;
//     const height = 600;
//     const canvas = createCanvas(width, height);
//     const ctx = canvas.getContext('2d');

//     // Load background image (optional)
//     const bgPath = path.join('assets', 'certificate_bg.png');  // Add a background image if desired
//     if (fs.existsSync(bgPath)) {
//       const background = await loadImage(bgPath);
//       ctx.drawImage(background, 0, 0, width, height);
//     } else {
//       // Fallback background color if no image is present
//       ctx.fillStyle = '#f3f4f6'; 
//       ctx.fillRect(0, 0, width, height);
//     }

//     // Add text content
//     ctx.fillStyle = '#333';
//     ctx.font = 'bold 28px Arial';
//     ctx.fillText('FARMER VERIFICATION CERTIFICATE', 120, 100);

//     ctx.font = '20px Arial';
//     ctx.fillText(`Name: ${name}`, 50, 200);
//     ctx.fillText(`Registration No: ${regNo}`, 50, 250);
//     ctx.fillText(`Issue Date: ${new Date(issueDate).toDateString()}`, 50, 300);
//     ctx.fillText(`Expiry Date: ${new Date(expiryDate).toDateString()}`, 50, 350);

//     ctx.font = '18px Arial';
//     ctx.fillText(`Certified by Agricultural Department`, 250, 500);

//     // Create `uploads` directory if it doesn't exist
//     const uploadsDir = path.join('uploads');
//     if (!fs.existsSync(uploadsDir)) {
//       fs.mkdirSync(uploadsDir, { recursive: true });
//     }

//     const filePath = path.join(uploadsDir, `certificate_${regNo}.png`);

//     const out = fs.createWriteStream(filePath);
//     const stream = canvas.createPNGStream();

//     stream.pipe(out);
//     out.on('finish', () => {
//       console.log(`✅ Image successfully created at: ${filePath}`);
//       resolve(filePath);
//     });

//     out.on('error', (err) => {
//       console.error('❌ Image Generation Error:', err);
//       reject(err);
//     });
//   });
// };

// import { createCanvas, loadImage } from 'canvas';
// import fs from 'fs';
// import path from 'path';

// export const generateCertificate = async ({ name, regNo, issueDate, expiryDate }) => {
//   return new Promise(async (resolve, reject) => {
//     const width = 800;
//     const height = 600;
//     const canvas = createCanvas(width, height);
//     const ctx = canvas.getContext('2d');

//     // Load background image or set green-themed background
//     const bgPath = path.join('assets', 'certificate_bg.png');
//     if (fs.existsSync(bgPath)) {
//       const background = await loadImage(bgPath);
//       ctx.drawImage(background, 0, 0, width, height);
//     } else {
//       ctx.fillStyle = '#E6F4EA'; // Light green background
//       ctx.fillRect(0, 0, width, height);
//     }

//     // Add header with decorative border
//     ctx.fillStyle = '#228B22'; // Deep green header
//     ctx.fillRect(0, 0, width, 80);
//     ctx.fillStyle = '#FFFFFF';
//     ctx.font = 'bold 32px Arial';
//     ctx.fillText('FARMER VERIFICATION CERTIFICATE', 120, 55);

//     // Add website logo
//     const logoPath = path.join('uploads', 'website_logo.jpg');
//     if (fs.existsSync(logoPath)) {
//       const logo = await loadImage(logoPath);
//       ctx.drawImage(logo, 650, 10, 100, 60); // Logo in top-right corner
//     }

//     // Add text content
//     ctx.fillStyle = '#333';
//     ctx.font = '20px Arial';
//     ctx.fillText(`Name: ${name}`, 50, 200);
//     ctx.fillText(`Registration No: ${regNo}`, 50, 250);
//     ctx.fillText(`Issue Date: ${new Date(issueDate).toDateString()}`, 50, 300);
//     ctx.fillText(`Expiry Date: ${new Date(expiryDate).toDateString()}`, 50, 350);

//     // Add footer content
//     ctx.fillStyle = '#228B22';
//     ctx.font = '18px Arial';
//     ctx.fillText(`Certified by Agricultural Department`, 250, 500);

//     // Create `uploads` directory if it doesn't exist
//     const uploadsDir = path.join('uploads');
//     if (!fs.existsSync(uploadsDir)) {
//       fs.mkdirSync(uploadsDir, { recursive: true });
//     }

//     const filePath = path.join(uploadsDir, `certificate_${regNo}.png`);

//     const out = fs.createWriteStream(filePath);
//     const stream = canvas.createPNGStream();

//     stream.pipe(out);
//     out.on('finish', () => {
//       console.log(`✅ Image successfully created at: ${filePath}`);
//       resolve(filePath);
//     });

//     out.on('error', (err) => {
//       console.error('❌ Image Generation Error:', err);
//       reject(err);
//     });
//   });
// };
import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';

export const generateCertificate = async ({ name, regNo, issueDate, expiryDate}) => {
  return new Promise(async (resolve, reject) => {
    const width = 800;
    const height = 600;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background Pattern (Use a background image URL)
    // const backgroundImage = path.join("uploads",'tp244-bg2-04.jpg')
    // ctx.drawImage({backgroundImage}, 0, 0, width, height);

    const backgroundImagePath = path.join("uploads", 'tp244-bg2-04.jpg');
if (fs.existsSync(backgroundImagePath)) {
    const backgroundImage = await loadImage(backgroundImagePath);
    ctx.drawImage(backgroundImage, 0, 0, width, height);
} else {
    console.error('❌ Background image not found at:', backgroundImagePath);
}

    ctx.globalAlpha = 0.05;  // Adjust opacity of background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);
    ctx.globalAlpha = 1.0;  // Reset alpha to 1 for further content

    // Border Design
    ctx.lineWidth = 16;
    ctx.strokeStyle = '#228B22'; // Green border color
    ctx.strokeRect(8, 8, width - 16, height - 16);

    // Header
    ctx.fillStyle = '#228B22'; // Dark green header
    ctx.font = '36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Organic Farming', width / 2.2, 90);

    // Certification Status
    ctx.fillStyle = '#006400'; // Dark Green Text
    ctx.font = 'italic 18px Arial';
    ctx.fillText('Official Certification Document', width / 2, 120);

    // Registration Number Box
    ctx.fillStyle = '#E6F4EA';
    ctx.fillRect(width - 180, 20, 160, 60);
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 2;
    ctx.strokeRect(width - 180, 20, 160, 60);
    ctx.fillStyle = '#006400';
    ctx.font = '12px Arial';
    ctx.fillText('Registration Number', width - 110, 35);
    ctx.font = '20px Arial';
    ctx.fillText(regNo, width - 110, 55);

    // Main Content
    ctx.fillStyle = '#006400';
    ctx.font = '20px serif';
    ctx.fillText('This is to certify that', width / 2, 150);
    ctx.font = '30px serif';
    ctx.fillText(name, width / 2, 230);

    // Certification Text
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    
    // Split the text into two lines
    const line1 = 'has successfully met all requirements and standards';
    const line2 = 'for organic farming practices in accordance with international guidelines.';
    
    // Render the first line
    ctx.fillText(line1, width / 2, 280);
    
    // Render the second line slightly below the first
    ctx.fillText(line2, width / 2, 310);

    // Dates Section
    ctx.fillStyle = '#006400'; // Dark Green
    ctx.font = '16px Arial';
    ctx.fillText('Issue Date: ' + new Date(issueDate).toDateString(), width / 3, 350);
    ctx.fillText('Valid Until: ' + new Date(expiryDate).toDateString(), (2 * width) / 3, 350);

    // // Location Section
    // ctx.fillStyle = '#006400'; // Dark Green
    // ctx.font = '16px Arial';
    // ctx.fillText('Location: ' + location, width / 2, 400);

    // Footer - Certifying Authority and Logo
    ctx.fillStyle = '#228B22';
    ctx.font = '18px Arial';
    ctx.fillText('Certified by Agricultural Department', width / 2, 500);

    // Add Organic Seal (Logo)
    const logoPath = path.join('uploads', 'website_logo.jpg');
    if (fs.existsSync(logoPath)) {
      const logo = await loadImage(logoPath);
      ctx.drawImage(logo, width/2, height - 200, 80, 80);
    }

    // Save the certificate
    const uploadsDir = path.join('uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, `certificate_${regNo}.png`);
    const out = fs.createWriteStream(filePath);
    const stream = canvas.createPNGStream();

    stream.pipe(out);
    out.on('finish', () => {
      console.log(`✅ Image successfully created at: ${filePath}`);
      resolve(filePath);
    });

    out.on('error', (err) => {
      console.error('❌ Image Generation Error:', err);
      reject(err);
    });
  });
};