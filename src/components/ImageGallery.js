import React from "react";
import { Masonry } from "@mui/lab";
import "../styles/ImageUploader.css";

const ImageGallery = ({ images }) => {
  return (
    <Masonry columns={3} spacing={1}>
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Edited ${index}`} className="gallery-image" />
      ))}
    </Masonry>
  );
};

export default ImageGallery;
