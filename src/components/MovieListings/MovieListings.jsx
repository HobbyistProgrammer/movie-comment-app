import React, { useEffect, useRef, useState } from 'react';
import './MovieListings.css';
// import { movies } from '../../movies';
import { Link } from 'react-router-dom';
import MovieListingCell from './MovieListingCell';
import { db } from '../../utils/firebase';
import { addDoc, getDocs, collection } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const MovieListings = () => {

  const [movies, setMovies] = useState([]);

  // This is to prevent the function from being executed twice.
  // Error occurs with the function being executed twice.
  const hasInitialized = useRef(false);

  useEffect(() => {
    const initializeMovies = async () => {
      if (hasInitialized.current) return;
      hasInitialized.current = true;

      const querySnapshot = await getDocs(collection(db, "movies"));

      if (querySnapshot.empty) {
        console.log("No movies found in the database. Initializing movies collection...");
        for (let i = 0; i < movies.length; i++) {
          addDoc(collection(db, "movies"), movies[i]);
        }
      }
      else {
        console.log("Movies collection already initialized.");
      }
      setMovies(querySnapshot.docs.map(doc => doc.data()));
    }
  
    initializeMovies();
  }, []);
 
  return(
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieListingCell key={index} data={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieListings;