import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const MovieSearch = ({ setSearchHistory }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) {
        setMovies([]);
        return;
      }
      try {
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=dd165ddd`);
        const data = await res.json();
        setMovies(data.Search || []);
        setSearchHistory(prev => [
          ...prev,
          { query, timestamp: new Date().toLocaleString() }
        ]);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    };
    const timeoutId = setTimeout(searchMovies, 500);
    return () => clearTimeout(timeoutId);
  }, [query, setSearchHistory]);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent text-slate-200">
          Movie Explorer
        </h1>
        <div className="flex items-center gap-4 mb-10 bg-gray-800 p-4 rounded-xl shadow-lg">
          <input
            type="text"
            className="flex-1 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link
            to="/history"
            className="px-4 py-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
          >
            History
          </Link>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <Link
                to={`/movie/${movie.imdbID}`}
                className="block p-5 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-lg font-semibold text-white">{movie.Title}</span>
                <span className="block text-sm text-gray-400">({movie.Year})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieSearch;