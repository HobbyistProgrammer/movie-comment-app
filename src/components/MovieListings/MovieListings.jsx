import './MovieListings.css';
import { movies } from '../../movies';
import { Link } from 'react-router-dom';
import MovieListingCell from './MovieListingCell';

const MovieListings = () => {

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