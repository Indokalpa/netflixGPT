import React, { use } from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='w-screen bg-black'>

      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 w-full' >
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"TopRated"} movies={movies.topRatedMovies}/>
      </div>

    </div>
  )
}

export default SecondaryContainer;
