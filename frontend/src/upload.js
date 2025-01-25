import React, { useState } from 'react';
import './App.css'; // Assuming you have an external CSS file for styling

const UploadForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Handle form data and send it to the backend
    const formData = new FormData(e.target);
    
    // Simulate form submission and loading spinner
    setTimeout(() => {
      setLoading(false);
      alert('Files uploaded successfully!');
      e.target.reset(); // Reset form after submission
    }, 2000);
  };

  return (
    <div className="container mt-5 p-4 rounded shadow-lg bg-light">
      <h1 className="text-center gradient-text mb-4">Upload Images and Videos</h1>
      <form id="uploadForm" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group mb-3">
          <label htmlFor="files" className="form-label">Choose Images or Videos:</label>
          <input
            type="file"
            name="files"
            multiple
            className="form-control"
            id="files"
            accept="image/*,video/*"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="background_image" className="form-label">Background Image (Optional):</label>
          <input
            type="file"
            name="background_image"
            className="form-control"
            id="background_image"
            accept="image/*"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="background_video" className="form-label">Background Video (Optional):</label>
          <input
            type="file"
            name="background_video"
            className="form-control"
            id="background_video"
            accept="video/*"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="background_color" className="form-label">Background Color:</label>
          <input
            type="color"
            name="background_color"
            className="form-control form-control-color"
            id="background_color"
            defaultValue="#ffffff"
          />
        </div>
        <div className="form-check form-switch mb-2">
          <input
            type="checkbox"
            name="transparent_background"
            className="form-check-input"
            id="transparentBackground"
          />
          <label className="form-check-label" htmlFor="transparentBackground">
            Make Background Transparent
          </label>
        </div>
        <div className="form-check form-switch mb-4">
          <input
            type="checkbox"
            name="remove_background"
            className="form-check-input"
            id="removeBackground"
          />
          <label className="form-check-label" htmlFor="removeBackground">
            Remove Background
          </label>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-lg btn-primary shadow-sm">
            Upload and Process
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-center mt-4">
          <div className="spinner-border text-primary spinner" role="status">
            <span className="visually-hidden">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
