import React, { useState } from 'react';
import './AddMovieForm.css';

const AddMovieForm = ({ onAddMovie, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title.trim() || !formData.description.trim() || 
        !formData.posterURL.trim() || !formData.rating) {
      alert('Please fill in all fields');
      return;
    }

    const rating = parseFloat(formData.rating);
    if (isNaN(rating) || rating < 0 || rating > 10) {
      alert('Rating must be a number between 0 and 10');
      return;
    }

    // Create new movie object
    const newMovie = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      posterURL: formData.posterURL.trim(),
      rating: rating
    };

    // Add movie and reset form
    onAddMovie(newMovie);
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: ''
    });
  };

  return (
    <div className="add-movie-form-overlay" data-testid="add-movie-form">
      <div className="add-movie-form-container">
        <div className="form-header">
          <h3>Add New Movie</h3>
          <button onClick={onClose} className="close-button" aria-label="Close form">
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Movie Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter movie title"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter movie description"
              rows="4"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="posterURL">Poster URL *</label>
            <input
              type="url"
              id="posterURL"
              name="posterURL"
              value={formData.posterURL}
              onChange={handleChange}
              placeholder="https://example.com/poster.jpg"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="rating">Rating (0-10) *</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="7.5"
              min="0"
              max="10"
              step="0.1"
              required
            />
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;