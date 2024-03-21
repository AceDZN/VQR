"use client"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const allowedTypes = ['image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      setErrorMessage('Only JPG and PNG files are allowed.');
      return;
    }

    if (file.size > maxSize) {
      setErrorMessage('File size exceeds the limit of 5MB.');
      return;
    }

    setUploadedImage(URL.createObjectURL(file));
    setErrorMessage('');
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-gray-300 p-4 rounded-md cursor-pointer ${
          isDragActive ? 'border-blue-500' : ''
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and drop an image here, or click to select an image</p>
        )}
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      {uploadedImage && (
        <div className="mt-4">
          <img src={uploadedImage} alt="Uploaded" className="max-w-xs" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;