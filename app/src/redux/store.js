import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import siteReducer from "./siteSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    site: siteReducer,
  },
});

export default store;
