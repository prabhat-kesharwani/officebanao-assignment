import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImageEditor from "./components/ImageEditor";
import ImageGallery from "./components/ImageGallery";

import "./styles/ImageUploader.css";
import "./styles/ImageEditor.css";
import "./styles/ImageGallery.css";
import "./App.css";




const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleSave = (croppedImage) => {
    setImages([...images, croppedImage]);
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <ImageUploader onImageUpload={setSelectedImage} />
      {selectedImage && (
        <ImageEditor
          image={selectedImage}
          onSave={handleSave}
          onReplace={() => setSelectedImage(null)}
          onClose={() => setSelectedImage(null)}
        />
      )}
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
