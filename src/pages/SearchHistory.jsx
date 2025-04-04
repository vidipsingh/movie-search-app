import React from "react";
import { Link } from "react-router-dom";

const SearchHistory = ({ searchHistory }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent text-slate-200">
          Search History
        </h1>
        <Link
          to="/"
          className="mb-5 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Search
        </Link>
        <ul className="space-y-4">
          {searchHistory.length === 0 ? (
            <p className="text-gray-400 text-center text-lg">No search history yet.</p>
          ) : (
            searchHistory.map((item, index) => (
              <li
                key={index}
                className="p-4 bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 transition-all duration-300 flex justify-between items-center"
              >
                <span className="text-lg font-medium">{item.query}</span>
                <span className="text-sm text-gray-400">{item.timestamp}</span>
              </li>
            ))
          )}
        </ul>
        
      </div>
    </div>
  );
};

export default SearchHistory;