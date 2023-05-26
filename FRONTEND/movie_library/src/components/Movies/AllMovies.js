import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import { getAllMovies } from '../../api-helpers/api-helpers';

export default function AllMovies() {

  const [movies, setMovies] = useState() ;
  
  useEffect(() => {
    getAllMovies()
    .then((data) => setMovies(data.movies))
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
     <div className='container'>
     <div className="row justify-content-center">

    {movies && 
      movies.map((movie, index) => (
      <MovieItem id={movie._id} key={index} image={movie.image} title={movie.title} text={movie.text} alt={movie.alt}/>
      )
    
    )}  
    
    </div>
      </div>
    </>
  );
};
