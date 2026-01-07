import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  // If no movies match the filter, display a message
  if (movies.length === 0) {
    return (
      <div className="no-movies">
        <p>No movies found. Try adjusting your search filters.</p>
      </div>
    );
  }

  return (
    <div className="movie-list" data-testid="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={`${movie.title}-${index}`} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;