import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
