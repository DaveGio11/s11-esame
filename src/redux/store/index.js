import { configureStore } from "@reduxjs/toolkit";
import { fetchStorage } from "../reducers/index";
const store = configureStore({
  reducer: {
    songs: fetchStorage,
  },
});

export default store;
