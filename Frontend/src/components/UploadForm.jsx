import React, { useState } from 'react';
import { uploadFarmVerification } from '../apis/Farmer_apis/Farm';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [files, setFiles] = useState([]);
  const [videoMessage, setVideoMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleVideoMessage = (event) => {
    setVideoMessage(event.target.files[0]);
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);
    const farmerId = localStorage.getItem('userId'); 

    const formData = new FormData();
    formData.append('farmerId', farmerId);
    formData.append('description', description);
    formData.append('city', city);

   
    files.forEach((file) => {
      formData.append('images', file);
    });

   
    if (videoMessage) {
      formData.append('videos', videoMessage);
    }
    console.log('Form Data Contents:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      
      const result = await uploadFarmVerification(formData);
      console.log(result); 
      setSuccessMessage('Update submitted successfully!');
     
      setTitle('');
      setDescription('');
      setFiles([]);
      setVideoMessage(null);
      
    } catch (error) {
      console.error(error);
      setError('An error occurred while uploading. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow my-11">
      <h2 className="text-lg font-bold text-center mb-5">Post a Real-Time Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload Photos</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            multiple
          />
        </div>

       
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload Video</label>
          <input
            type="file"
            onChange={handleVideoMessage}
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            accept="video/*"
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {successMessage && <p className="text-green-600">{successMessage}</p>}

        <button type="submit" disabled={loading} className={`w-full mt-5 ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-bold py-2 rounded-md transition duration-200`}>
          {loading ? 'Submitting...' : 'Submit Update'}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;