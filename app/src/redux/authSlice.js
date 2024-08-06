import { createSlice } from "@reduxjs/toolkit";

const initialUser = localStorage.getItem("downWatch-user")
  ? JSON.parse(localStorage.getItem("downWatch-user"))
  : null;

const initialState = {
  user: initialUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
    signup: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
