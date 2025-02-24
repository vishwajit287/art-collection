import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import PhotoGallery from "../components/PhotoGallery";

const PhotosPage: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setPhotos((prev) => [...prev, reader.result as string]);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this photo?"
    );

    if (confirmDelete) {
      setPhotos((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Photo Gallery</h1>
      <ImageUpload onUpload={handleUpload} />
      <PhotoGallery photos={photos} onDelete={handleDelete} />
    </div>
  );
};

export default PhotosPage;
