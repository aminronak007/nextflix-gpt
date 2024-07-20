import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="overflow-hidden">
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
