import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: {
    list: [],
  },
};

const fetchSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    fetchStorage: (state, action) => {
      state.songs.list.push(action.payload);
    },
  },
});

export const { fetchStorage } = fetchSlice.actions;
export default fetchSlice.reducer;
