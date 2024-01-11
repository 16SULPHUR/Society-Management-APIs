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

async function uploadToCloudStorage(imagePath) {
  const { uploadFile } = await import("@uploadcare/upload-client");
  const { readFileSync } = await import("fs");

  const data = readFileSync(imagePath);
  const file = await uploadFile(data, {
    publicKey: "9eaeb2ea2031be2f1d7c",
    fileName: imagePath,
    contentType: "image/jpeg",
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

module.exports = uploadImage;
