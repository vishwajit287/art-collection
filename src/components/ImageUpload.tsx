import React, { useState } from "react";

interface ImageUploadProps {
  onUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
      if (!validExtensions.includes(file.type)) {
        setError("Only JPG, JPEG, and PNG formats are allowed.");
        setSelectedFile(null);
        return;
      }

      setError("");
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <input
        type="file"
        accept="image/jpeg, image/jpg, image/png"
        onChange={handleFileChange}
        className="mb-2"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={!selectedFile}
      >
        Upload Photo
      </button>
    </div>
  );
};

export default ImageUpload;
