import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1> Actors Page </h1>
<<<<<<< HEAD
      {actors.map((actor, index) => (
         <div key={index}>
             <h3>Name: {actor.name}</h3>
             <p>Movies:</p>
             <ul>
                 {actor.movies.map((movie, index) => (
                     <li key={index}>{movie}</li>
                 ))}
             </ul>
         </div>
     ))}
=======
>>>>>>> 0c6cd6253bcf79aa76f7ea6aedc6783303748242
    </div>
  );
};

export default Actors;
