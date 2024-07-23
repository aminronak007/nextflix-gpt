import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptMoviesResult } from "store/GptSearch/gptSlice";
import { API_OPTIONS } from "utils/constants";
import lang from "utils/languageConstants";
// import openai from "utils/openAi";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchTextRef = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // const searchText = searchTextRef.current.value;

    // const gptQuery = `Act as a Movie Recommendation system and suggest movies for the query ${searchText}. Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    // // Make an API call to Open AI GPT and get movie results
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) return;
    // // eslint-disable-next-line
    // const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    const dummyMovies = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];
    const promiseArray = dummyMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMoviesResult({ movieResults: tmdbResults, movieNames: dummyMovies })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchTextRef}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white font-bold rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
