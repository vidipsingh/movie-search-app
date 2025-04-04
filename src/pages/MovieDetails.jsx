import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${"dd165ddd"}`);
      const data = await res.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <p className="text-2xl animate-pulse">Loading...</p>
    </div>
  );

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors duration-200"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Search
        </Link>
        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
          <h1 className="text-4xl font-bold mb-6 text-indigo-300">{movie.Title}</h1>
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <div className="flex-1">
              <p className="text-gray-300 mb-4 leading-relaxed">{movie.Plot}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><span className="font-semibold text-indigo-400">Year:</span> {movie.Year}</p>
                <p><span className="font-semibold text-indigo-400">Genre:</span> {movie.Genre}</p>
                <p><span className="font-semibold text-indigo-400">Director:</span> {movie.Director || "N/A"}</p>
                <p><span className="font-semibold text-indigo-400">Actors:</span> {movie.Actors || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;