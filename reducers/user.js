import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null, firstname: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.password = action.payload.password;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
      state.value.token = action.payload.token;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.password = action.payload.password;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
