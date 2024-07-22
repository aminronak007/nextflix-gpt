import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG_URL } from "utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMG_URL} alt="gpt-search" />{" "}
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
