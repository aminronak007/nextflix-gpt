import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, gptMoviesResult } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      {movieNames.map((movieName, i) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptMoviesResult[i]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
