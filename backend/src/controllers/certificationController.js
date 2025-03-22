import Certification from "../models/Certification.js";
import User from "../models/User.js";
import { generateCertificate } from "../utils/generateCertificate.js";
import cloudinary from "../utils/cloudinary.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

// // Upload to Cloudinary
// const uploadToCloudinary = async (fileBuffer, folderName) => {
//   return new Promise((resolve, reject) => {
//     const uploadStream = cloudinary.uploader.upload_stream(
//       { folder: folderName, resource_type: "auto" },
//       (error, result) => {
//         if (error) reject(error);
//         else resolve(result.secure_url);
//       }
//     );
//     uploadStream.end(fileBuffer);
//   });
// };

const uploadToCloudinary = async (fileBuffer, folderName) => {
    if (!fileBuffer) {
      throw new Error("File buffer is empty or invalid.");
    }
  
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: folderName, resource_type: "auto" },
        (error, result) => {
          if (error) {
            console.error("❌ Cloudinary Upload Error:", error); // Detailed error logging
            reject(new Error(`Cloudinary upload failed: ${error.message}`));
          } else {
            resolve(result.secure_url);
          }
        }
      );
  
      uploadStream.end(fileBuffer);
    });
  };
  

// Verify Farmer
export const verifyFarmer = async (req, res) => {
  const { farmerId } = req.body;

  try {
    const farmer = await User.findById(farmerId);
    if (!farmer) return res.status(404).json({ message: "Farmer not found." });

    const regNo = `REG-${uuidv4().slice(0, 8).toUpperCase()}`;
    const issueDate = new Date();
    const expiryDate = new Date();
    expiryDate.setFullYear(issueDate.getFullYear() + 20);

    // Upload documents to Cloudinary
    const incomeCertUrl = await uploadToCloudinary(req.files['income_certificate'][0].buffer, 'certificates');
    const soilTestUrl = await uploadToCloudinary(req.files['soil_test_report'][0].buffer, 'certificates');
    const landDocUrl = await uploadToCloudinary(req.files['land_document'][0].buffer, 'certificates');

    // Generate PDF Certificate
    // const pdfFilePath = await generateCertificate({
    //   name: farmer.name,
    //   regNo,
    //   issueDate,
    //   expiryDate
    // });

    
    // const pdfBuffer = fs.readFileSync(pdfFilePath);
    // const certificateUrl = await uploadToCloudinary(pdfBuffer, 'certificates');

// // Generate PDF Certificate
// const pdfFilePath = await generateCertificate({
//     name: farmer.name,
//     regNo,
//     issueDate,
//     expiryDate
//   });
  
//   // Ensure PDF file is fully written before proceeding
//   await new Promise(resolve => setTimeout(resolve, 100)); 
  
//   // Read PDF securely
//   const pdfBuffer = await fs.promises.readFile(pdfFilePath);
  
//   const certificateUrl = await uploadToCloudinary(pdfBuffer, 'certificates')
//     .then(url => {
//       console.log("✅ Cloudinary Upload Successful:", url);
//       return url;
//     })
//     .catch(err => {
//       console.error("❌ Cloudinary Upload Failed:", err.message);
//       throw err;
//     });
  

const imageFilePath = await generateCertificate({
      name: farmer.name,
    regNo,
    issueDate,
    expiryDate
});
const imageBuffer = await fs.promises.readFile(imageFilePath);
const certificateUrl = await uploadToCloudinary(imageBuffer, 'certificates');


    // Save certificate details in database
    const certification = new Certification({
      farmerId,
      income_certificate: incomeCertUrl,
      soil_test_report: soilTestUrl,
      land_document: landDocUrl,
      certificate_pdf: certificateUrl,
      issue_date: issueDate,
      expiry_date: expiryDate,
      reg_no: regNo
    });

    await certification.save();

    farmer.verified = true;
    await farmer.save();

    // Cleanup PDF file after upload
    fs.unlinkSync(imageFilePath);

    res.status(201).json({
      message: "Farmer verified successfully!",
      certification
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
