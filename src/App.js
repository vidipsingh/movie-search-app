import './App.css';
import React, { useState } from 'react';
import MovieSearch from "./pages/MovieSearch";
import MovieDetails from "./pages/MovieDetails";
import SearchHistory from "./pages/SearchHistory";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <div className="bg-gray-900">
      <Routes>
        <Route
          path="/"
          element={<MovieSearch setSearchHistory={setSearchHistory} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/history"
          element={<SearchHistory searchHistory={searchHistory} />}
        />
      </Routes>
    </div>
  );
}

export default App;