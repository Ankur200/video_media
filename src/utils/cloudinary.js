import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const responce = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //console.log("FILE UPLOADDED", responce.url);
    fs.unlinkSync(localFilePath);
    return responce;
  } catch (error) {
    // fs.unlinkSync(localFilePath);
    // return null;
    console.error("Error uploading file to Cloudinary:", error);

    // Check if the file exists before attempting to delete it
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Delete the local file if it exists
      //console.log("Local file deleted:", localFilePath); // Log the deletion
    }
    return null;
  }
};

export { uploadOnCloudinary };
