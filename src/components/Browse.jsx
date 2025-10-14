import { use } from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  // custom hook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      { 
      showGptSearch ? 
      ( <GptSearch /> ) : 
      ( <>
      <MainContainer />
      <SecondaryContainer />
      </> )
       
      }

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
