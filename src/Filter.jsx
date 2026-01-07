import React from 'react';
import './Filter.css';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter-container" data-testid="filter">
      <div className="filter-header">
        <h2>Find Your Movie</h2>
        <p>Filter by title or rating</p>
      </div>
      
      <div className="filter-inputs">
        <div className="filter-group">
          <label htmlFor="title-filter" className="filter-label">
            <span className="label-icon">🎬</span>
            Search by Title
          </label>
          <input
            id="title-filter"
            type="text"
            className="filter-input"
            placeholder="Type movie title..."
            onChange={(e) => onTitleChange(e.target.value)}
            aria-label="Filter movies by title"
          />
        </div>
        
        <div className="filter-group">
          <label htmlFor="rating-filter" className="filter-label">
            <span className="label-icon">⭐</span>
            Minimum Rating
          </label>
          <input
            id="rating-filter"
            type="number"
            className="filter-input"
            placeholder="0-10"
            min="0"
            max="10"
            step="0.1"
            onChange={(e) => onRatingChange(e.target.value)}
            aria-label="Filter movies by minimum rating"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;