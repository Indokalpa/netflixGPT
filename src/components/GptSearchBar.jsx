import React, { use, useRef } from 'react'
import lang from '../utils/languageConstants';
import { useSelector, useDispatch } from 'react-redux';
import ai from '../utils/gemini';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const serachText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB 
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" 
      + movie + "&include_adult=false&language=en-US&page=1",
       API_OPTIONS
      );

      const json = await data.json();

      return json.results;
  }

  const handleGptSearchClick = async () => {
    console.log(serachText.current.value);
    // Make an API call to GPT with the search text

    const gptQuery = "Act as a Movie Reccomendation System and suggest some movies for the query " 
    + serachText.current.value + ". Only give me names of 5 movies. Comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: gptQuery,
    });

      console.log(gptResults.candidates?.[0]?.content?.parts?.[0]?.text);
      const gptMovies = gptResults.candidates?.[0]?.content?.parts?.[0]?.text.split(',');

      // For each movie name, call TMDB API
      const PromiseArray = gptMovies.map(movie => searchMovieTMDB(movie.trim()));
      // [Promise, Promise, Promise, Promise, Promise]

      const tmdbResults = await Promise.all(PromiseArray);
      console.log(tmdbResults);

      dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))
  };

  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center '>

      <form className=' w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input 
        ref={serachText}
        type='text' 
        className='p-4 m-4 bg-white col-span-9 rounded-md' 
        placeholder={lang[langKey].gptSearchPlaceholder}>
        </input>

        <button 
        className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
        onClick={handleGptSearchClick}
        >
        {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
