import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';//By deafult nodejs file system module 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload
        (localFilePath,{
            resource_type: "auto", 
        })
        //file has been successfully uploaded on cloudinary
        // console.log("File has been uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath) //remove the locally saved
        return response
    }
    catch(error){
        fs.unlinkSync(localFilePath) //remove the locally saved 
        // temporary file as the upload operation got failed
        return null
    }
}


const uploadToCloudinary = async (filePath) => {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'certificates', // Optional folder in Cloudinary
      });
      return result.secure_url;
    } catch (error) {
      console.error('Cloudinary Upload Error:', error);
      throw new Error('Failed to upload certificate to Cloudinary');
    }
  };

export default cloudinary
export {uploadOnCloudinary, uploadToCloudinary }