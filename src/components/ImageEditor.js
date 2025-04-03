import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Drawer, Button } from "@mui/material";
import "../styles/ImageUploader.css";


const ImageEditor = ({ image, onSave, onReplace, onClose }) => {
  const cropperRef = useRef(null);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);

  const applyCrop = () => {
    const cropper = cropperRef.current.cropper;
    onSave(cropper.getCroppedCanvas().toDataURL());
  };

  const rotateImage = () => {
    cropperRef.current.cropper.rotate(90);
  };

  const flipHorizontal = () => {
    const newScaleX = scaleX * -1;
    setScaleX(newScaleX);
    cropperRef.current.cropper.scaleX(newScaleX);
  };

  const flipVertical = () => {
    const newScaleY = scaleY * -1;
    setScaleY(newScaleY);
    cropperRef.current.cropper.scaleY(newScaleY);
  };

  return (
    <Drawer anchor="right" open={!!image} onClose={onClose}>
      <div className="image-editor">
        <Cropper
          ref={cropperRef}
          src={image}
          style={{ height: 400, width: "100%" }}
          aspectRatio={1}
          guides={false}
        />
        <div className="controls">
          <Button variant="contained" onClick={rotateImage}>Rotate</Button>
          <Button variant="contained" onClick={flipHorizontal}>Flip Horizontal</Button>
          <Button variant="contained" onClick={flipVertical}>Flip Vertical</Button>
          <Button variant="contained" onClick={applyCrop}>Save</Button>
          <Button variant="contained" onClick={onReplace}>Replace</Button>
          <Button variant="contained" onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </Drawer>
  );
};

export default ImageEditor;
