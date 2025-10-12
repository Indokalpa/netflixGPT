import { use } from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  // custom hook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
      MainContainer
        - VideoBackground
        - VideoTitle
      SecondayContainer
        - MovieList * n
          - cards * n
      */}
    </div>
  )
};

export default Browse;
