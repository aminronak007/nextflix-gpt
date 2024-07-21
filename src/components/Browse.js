import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "hooks/usePopularMovies";
import useUpcomingMovies from "hooks/useUpcomingMovies";
import useTopRatedMovies from "hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
          Main Container
            -  Video Background
            - Video Title
          Seconder Container
            - Movie List * n
              - Cards * n
      */}
    </div>
  );
};

export default Browse;
