import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isloggedin: false
  },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload.token;
      state.isloggedin = !state.isloggedin;
      localStorage.setItem("token", action.payload.token);
    },
    logoutHandler(state) {
      state.token = null;
      state.isLoggedIn = !state.isLoggedIn;
      localStorage.removeItem("token");
    }
  }
});
export const loginAction = loginSlice.actions;
export default loginSlice;
