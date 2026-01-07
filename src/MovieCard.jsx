import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="movie-card" data-testid="movie-card">
      <div className="movie-poster">
        <img src={posterURL} alt={title} className="poster-image" />
        <div className="movie-rating">
          <span className="rating-star">⭐</span>
          <span className="rating-value">{rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;