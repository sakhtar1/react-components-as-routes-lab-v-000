import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  return (
    <div>
      <h1>Movies Page</h1>
<<<<<<< HEAD
      {movies.map((movie, index) => (
         <div key={index}>
             <h3>Name: {movie.title}</h3>
             <p>Time: {movie.time}</p>
             <p>Genres:</p>
             <ul>
                 {movie.genres.map((genre, index) => (
                     <li key={index}>{genre}</li>
                 ))}
             </ul>
         </div>
     ))}
=======
      {this.props.movies.map(movie => <div> {movie.title} {movie.time} <ul>{movie.genre}</ul><div/>)}
>>>>>>> 0c6cd6253bcf79aa76f7ea6aedc6783303748242

    </div>
  );
}

export default Movies;
