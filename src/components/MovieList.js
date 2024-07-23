import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6 bg-transparent">
      <h1 className="text-lg md:text-2xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
