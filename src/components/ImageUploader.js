import React from "react";
import "../styles/ImageUploader.css";

const ImageUploader = ({ onImageUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onImageUpload(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-uploader">
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};


export default ImageUploader;
