import React, { useState, useMemo } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import './App.css';

const App = () => {
  // Initial sample movies
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 8.8
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 9.3
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 9.0
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      posterURL: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 8.9
    },
    {
      title: "Parasite",
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      posterURL: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 8.6
    },
    {
      title: "La La Land",
      description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      posterURL: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 8.0
    }
  ]);

  // Filter states
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');  // This is setRatingFilter

  // Add movie form visibility
  const [showAddForm, setShowAddForm] = useState(false);

  // Filter movies based on title and rating
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
      const matchesRating = ratingFilter ? movie.rating >= parseFloat(ratingFilter) : true;
      return matchesTitle && matchesRating;
    });
  }, [movies, titleFilter, ratingFilter]);

  // Add new movie
  const handleAddMovie = (newMovie) => {
    setMovies(prevMovies => [newMovie, ...prevMovies]);
    setShowAddForm(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <h1>🎬 popCorn</h1>
            <p className="tagline">Your personal movie collection</p>
          </div>
          <button 
            className="add-movie-button"
            onClick={() => setShowAddForm(true)}
            aria-label="Add new movie"
          >
            + Add Movie
          </button>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {/* FIX IS HERE: Use setRatingFilter instead of setRatingChange */}
          <Filter 
            onTitleChange={setTitleFilter}
            onRatingChange={setRatingFilter}  // ✅ FIXED: setRatingFilter
          />
          
          <div className="results-info">
            <h2>Movies ({filteredMovies.length})</h2>
            <p className="filter-info">
              {titleFilter && `Title: "${titleFilter}"`}
              {ratingFilter && `${titleFilter ? ' • ' : ''}Min. Rating: ${ratingFilter}`}
            </p>
          </div>
          
          <MovieList movies={filteredMovies} />
          
          {/* Clear filters button */}
          {(titleFilter || ratingFilter) && (
            <div className="clear-filters">
              <button 
                onClick={() => {
                  setTitleFilter('');
                  setRatingFilter('');
                }}
                className="clear-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Add Movie Form Modal */}
      {showAddForm && (
        <AddMovieForm 
          onAddMovie={handleAddMovie}
          onClose={() => setShowAddForm(false)}
        />
      )}

      <footer className="app-footer">
        <div className="container">
          <p>popCorn Movie App • Built with React Hooks</p>
          <p className="total-movies">Total Movies: {movies.length}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;