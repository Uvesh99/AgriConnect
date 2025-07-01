// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const FarmerVerification = () => {
//   const [farmerId, setFarmerId] = useState("");
//   const [incomeCert, setIncomeCert] = useState(null);
//   const [soilTest, setSoilTest] = useState(null);
//   const [landDoc, setLandDoc] = useState(null);
//   const [certificateUrl, setCertificateUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleFileChange = (e, setFile) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!farmerId || !incomeCert || !soilTest || !landDoc) {
//       setError("All fields are required.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("farmerId", farmerId);
//     formData.append("income_certificate", incomeCert);
//     formData.append("soil_test_report", soilTest);
//     formData.append("land_document", landDoc);

//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "https://agriconnect-backend-oumj.onrender.com/api/certifications/verify-farmer",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       setCertificateUrl(response.data.certification.certificate_pdf);
//       setError("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Verification failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-5 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
//       <Link to="http://127.0.0.1:5000/">
//         <button
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
//           style={{ margin: "4rem" }}
//         >
//           {" "}
//           Soil Testing
//         </button>
//       </Link>
//       <h2 className="text-2xl font-bold text-center">Farmer Verification</h2>
//       {error && <p className="text-red-500">{error}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Farmer ID"
//           value={farmerId}
//           onChange={(e) => setFarmerId(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />

//         <input
//           type="file"
//           accept=".pdf"
//           onChange={(e) => handleFileChange(e, setIncomeCert)}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />

//         <input
//           type="file"
//           accept=".pdf"
//           onChange={(e) => handleFileChange(e, setSoilTest)}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />

//         <input
//           type="file"
//           accept=".pdf"
//           onChange={(e) => handleFileChange(e, setLandDoc)}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//           disabled={loading}
//         >
//           {loading ? "Verifying..." : "Verify Farmer"}
//         </button>
//       </form>

//       {certificateUrl && (
//         <div className="mt-4 text-center">
//           <p className="text-green-500 font-bold">Verification Successful!</p>
//           <a
//             href={certificateUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 underline"
//           >
//             View Certificate
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FarmerVerification;



import React, {useEffect, useState } from "react";
import axios from "axios";
import { getUser } from "../apis/Auth_apis/Auth";
import { Link } from "react-router-dom";

const FarmerVerification = () => {
  const [userData, setUserData] = useState(null);
  const [farmerId, setFarmerId] = useState("");
  const [incomeCert, setIncomeCert] = useState(null);
  const [soilTest, setSoilTest] = useState(null);
  const [landDoc, setLandDoc] = useState(null);
  const [certificateUrl, setCertificateUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    useEffect(() => {
      const getUserData = async () => {
        try {
          const data = await getUser();
          setUserData(data);
        } catch (err) {
          setError(err.message || "Failed to fetch user data");
        } finally {
          setLoading(false);
        }
      };
  
      getUserData();
    }, []);
  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!incomeCert || !soilTest || !landDoc) {
      setError("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("farmerId", userData?._id || farmerId);
    formData.append("income_certificate", incomeCert);
    formData.append("soil_test_report", soilTest);
    formData.append("land_document", landDoc);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com/api/certifications/verify-farmer",
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
    <div className="p-5 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4" style={{ marginTop: "4rem" }}>
      <Link to="https://soilanalyzer-2h4vfkhohzx8u3jtsqhyfl.streamlit.app/" target="blank">
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
