import React, { useState } from 'react';
import { Link } from "react-router-dom";



const MovieSearch = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    // const [history, setHistory] = useState([]);

    const searchMovies = async () => {
        if(!query) return;
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apiKey=${"dd165ddd"}`);
        const data = await res.json();
        setMovies(data.Search || []);
        // setHistory([...history, query]);
    };

  return (
    <div>
        <div className='py-5 px-5 flex gap-2'>
            <div className='text-lg font-bold'>Movie Search</div>
            <input type="text" className='bg-gray-200' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={searchMovies} className='bg-black text-white px-2 rounded-md hover:bg-black/80'>Search</button>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.imdbID} className='py-2'>
                        <Link to={`/movie/${movie.imdbID}`} className='text-blue-500 hover:underline'>{movie.Title} ({movie.Year}) 
                        </Link>
                    </li>
                ))
                
                }
            </ul>
            {/* <Link to="/" >View Search History</Link> */}
        </div>
    </div>
  )
}

export default MovieSearch;