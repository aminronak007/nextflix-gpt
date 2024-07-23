import React, { Fragment } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG_URL } from "utils/constants";

const GptSearch = () => {
  return (
    <Fragment>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMG_URL}
          className="h-screen object-cover md:w-screen"
          alt="gpt-search"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </Fragment>
  );
};

export default GptSearch;
