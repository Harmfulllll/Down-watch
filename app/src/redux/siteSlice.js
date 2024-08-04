import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  site: null,
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    getSites: (state, action) => {
      state.site = action.payload;
    },
    deleteSite: (state, action) => {
      state.site = action.payload;
    },
    addASite: (state, action) => {
      state.site = action.payload;
    },
  },
});
export default siteSlice.reducer;
export const { getSites, deleteSite, addASite } = siteSlice.actions;
