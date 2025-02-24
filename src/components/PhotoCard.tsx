import React from "react";
import { FaTrash } from "react-icons/fa";

interface PhotoCardProps {
  src: string;
  onDelete: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, onDelete }) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt="Uploaded"
        className="w-full h-60 object-cover rounded-lg shadow-md"
      />
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default PhotoCard;
