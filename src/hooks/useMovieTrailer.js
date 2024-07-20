import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "store/Movies/movieSlice";
import { API_OPTIONS } from "utils/constants";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();
    const filterData = json.results
      .filter((video) => video.type === "Trailer")
      .sort((a, b) => b.size - a.size);
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line
  }, []);
};

export default useTrailerVideo;
