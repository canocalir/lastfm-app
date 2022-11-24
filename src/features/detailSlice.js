import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    albumsData: [],
    tracksData: []
  },
  reducers: {
    setAlbumsData: (state, { payload }) => {
      state.albumsData = payload;
    },
    setTracksData: (state, { payload }) => {
      state.tracksData = payload;
    },
  },
});

export const { setAlbumsData, setTracksData } = detailSlice.actions;
export const selectDetails = (state) => state.details
export default detailSlice.reducer;
