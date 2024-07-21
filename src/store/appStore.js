import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import moviesReducer from "./Movies/movieSlice";
import gptReducer from "./GptSearch/gptSlice";
import configReducer from "./AppConfig/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
