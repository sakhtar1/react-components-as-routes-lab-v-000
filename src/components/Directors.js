import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
<<<<<<< HEAD
      {directors.map((director, index) => (
         <div key={index}>
             <h3>Name: {director.name}</h3>
             <p>Movies:</p>
             <ul>
                 {director.movies.map((movie, index) => (
                     <li key={index}>{movie}</li>
                 ))}
             </ul>
         </div>
     ))}
=======
>>>>>>> 0c6cd6253bcf79aa76f7ea6aedc6783303748242
    </div>
  );
}

export default Directors
