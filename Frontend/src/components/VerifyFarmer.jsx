// import { useState } from 'react';
// import { Upload, Calendar, FileText } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { verifyFarmer } from '../apis/Farmer_apis/Farm';

// function VerifyFarmer() {
//   const [formData, setFormData] = useState({
//     income_certificate: null,
//     soil_test_report: null,
//     land_document: null,
//   });

//   const [filenames, setFilenames] = useState({
//     income_certificate: '',
//     soil_test_report: '',
//     land_document: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, type } = e.target;

//     if (type === 'file') {
//       const files = e.target.files;
//       const file = files ? files[0] : null; // Get the uploaded file
//       setFormData(prev => ({
//         ...prev,
//         [name]: file
//       }));
//       setFilenames(prev => ({
//         ...prev,
//         [name]: file ? file.name : '' // Update the filename state
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a FormData object
//     const data = new FormData();
//     data.append('income_certificate', formData.income_certificate);
//     data.append('soil_test_report', formData.soil_test_report);
//     data.append('land_document', formData.land_document);

//     const authToken = localStorage.getItem("authToken");

//     try {
//       const response = await verifyFarmer(data, authToken);
//       console.log('Response:', response);
//     } catch (error) {
//       console.error('Error submitting documents:', error);
//     }
//   };

//   return (
//     <>
//       <Link to="http://127.0.0.1:5000/">
//         <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300" style={{margin: '4rem'}}>
//           Soil Testing
//         </button>
//       </Link>

//       <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto">
//           <div className="bg-white shadow-lg rounded-lg px-8 py-6">
//             <div className="mb-8 text-center">
//               <h2 className="text-3xl font-bold text-gray-900">Document Submission Form</h2>
//               <p className="mt-2 text-gray-600">Please fill in all the required information</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">

//               <div className="space-y-6">
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

//                   <div>
//                     <label htmlFor="income_certificate" className="block text-sm font-medium text-gray-700">
//                       Income Certificate
//                     </label>
//                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                       <div className="space-y-1 text-center">
//                         <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                         <div className="flex text-sm text-gray-600">
//                           <label htmlFor="income_certificate" className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500">
//                             <span>Upload a file</span>
//                             <input
//                               id="income_certificate"
//                               name="income_certificate"
//                               type="file"
//                               className="sr-only"
//                               onChange={handleInputChange}
//                               required
//                             />
//                           </label>
//                         </div>
//                         <p className="text-xs text-gray-500">PDF up to 10MB</p>
//                         {filenames.income_certificate && (
//                           <p className="text-sm text-gray-700">File: {filenames.income_certificate}</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Soil Test Report */}
//                   <div>
//                     <label htmlFor="soil_test_report" className="block text-sm font-medium text-gray-700">
//                       Soil Test Report
//                     </label>
//                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                       <div className="space-y-1 text-center">
//                         <FileText className="mx-auto h-12 w-12 text-gray-400" />
//                         <div className="flex text-sm text-gray-600">
//                           <label htmlFor="soil_test_report" className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500">
//                             <span>Upload a file</span>
//                             <input
//                               id="soil_test_report"
//                               name="soil_test_report"
//                               type="file"
//                               className="sr-only"
//                               onChange={handleInputChange}
//                               required
//                             />
//                           </label>
//                         </div>
//                         <p className="text-xs text-gray-500">PDF up to 10MB</p>
//                         {filenames.soil_test_report && (
//                           <p className="text-sm text-gray-700">File: {filenames.soil_test_report}</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Land Document */}
//                   <div>
//                     <label htmlFor="land_document" className="block text-sm font-medium text-gray-700">
//                       Land Document
//                     </label>
//                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                       <div className="space-y-1 text-center">
//                         <FileText className="mx-auto h-12 w-12 text-gray-400" />
//                         <div className="flex text-sm text-gray-600">
//                           <label htmlFor="land_document" className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500">
//                             <span>Upload a file</span>
//                             <input
//                               id="land_document"
//                               name="land_document"
//                               type="file"
//                               className="sr-only"
//                               onChange={handleInputChange}
//                               required
//                             />
//                           </label>
//                         </div>
//                         <p className="text-xs text-gray-500">PDF up to 10MB</p>
//                         {filenames.land_document && (
//                           <p className="text-sm text-gray-700">File: {filenames.land_document}</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="pt-5">
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-offset-blue focus:ring-offset-opacity"
//                 >
//                   Submit Documents
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default VerifyFarmer;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FarmerVerification = () => {
  const [farmerId, setFarmerId] = useState("");
  const [incomeCert, setIncomeCert] = useState(null);
  const [soilTest, setSoilTest] = useState(null);
  const [landDoc, setLandDoc] = useState(null);
  const [certificateUrl, setCertificateUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!farmerId || !incomeCert || !soilTest || !landDoc) {
      setError("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("farmerId", farmerId);
    formData.append("income_certificate", incomeCert);
    formData.append("soil_test_report", soilTest);
    formData.append("land_document", landDoc);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://agriconnect-backend-oumj.onrender.com/api/certifications/verify-farmer",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setCertificateUrl(response.data.certification.certificate_pdf);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <Link to="http://127.0.0.1:5000/">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
          style={{ margin: "4rem" }}
        >
          {" "}
          Soil Testing
        </button>
      </Link>
      <h2 className="text-2xl font-bold text-center">Farmer Verification</h2>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Farmer ID"
          value={farmerId}
          onChange={(e) => setFarmerId(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange(e, setIncomeCert)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange(e, setSoilTest)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange(e, setLandDoc)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify Farmer"}
        </button>
      </form>

      {certificateUrl && (
        <div className="mt-4 text-center">
          <p className="text-green-500 font-bold">Verification Successful!</p>
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Certificate
          </a>
        </div>
      )}
    </div>
  );
};

export default FarmerVerification;
