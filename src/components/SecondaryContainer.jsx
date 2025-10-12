import React, { use } from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className=' bg-black'>

      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"TopRated"} movies={movies.topRatedMovies}/>
      </div>

    </div>
  )
}

export default SecondaryContainer;
