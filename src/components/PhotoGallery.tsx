import React from "react";
import PhotoCard from "./PhotoCard";

interface PhotoGalleryProps {
  photos: string[];
  onDelete: (index: number) => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
      {photos.length > 0 ? (
        photos.map((photo, index) => (
          <PhotoCard key={index} src={photo} onDelete={() => onDelete(index)} />
        ))
      ) : (
        <p className="text-gray-600 col-span-3 text-center">
          No photos uploaded yet.
        </p>
      )}
    </div>
  );
};

export default PhotoGallery;
