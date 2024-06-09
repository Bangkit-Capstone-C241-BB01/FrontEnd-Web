import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authThunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    error: null,
    loading: false,
  },
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.isAuthenticated = false;
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(register.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(register.pending, (state) => {
        state.isAuthenticated = false;
        state.loading = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
