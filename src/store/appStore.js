import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import moviesReducer from "./Movies/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
