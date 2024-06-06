import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authThunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(register.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
