const fs = require("fs");

async function uploadImage(image) {
  let uploadedImageToCloudStorage;
  try {
    uploadedImageToCloudStorage = await uploadToCloudStorage(image.path);
    if (uploadedImageToCloudStorage) {
      deleteLocalImage(image.path);
    }
  } catch {
    return false;
  }

  return uploadedImageToCloudStorage;
}

async function uploadToCloudStorage(fileBuffer, fileName) {
    const { uploadFile } = await import("@uploadcare/upload-client");
  const file = await uploadFile(fileBuffer, {
    publicKey: "9eaeb2ea2031be2f1d7c",
    fileName: fileName,
    contentType: "image/jpeg", // Adjust the content type based on your file type
  });

  console.log(file.cdnUrl);
  return file.cdnUrl;
}

function deleteLocalImage(imagePath) {
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted:", imagePath);
    }
  });
}

module.exports = uploadToCloudStorage;
