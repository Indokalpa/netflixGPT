import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  // custom hook
  useNowPlayingMovies();

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
