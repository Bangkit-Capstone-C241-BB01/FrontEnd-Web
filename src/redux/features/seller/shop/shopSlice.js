import { createSlice } from "@reduxjs/toolkit";
import { fetchShopProfile, updateShopProfile } from "./shopThunks";

const shopProfileSlice = createSlice({
  name: "shopProfile",
  initialState: {
    profileData: null,
    profileLoading: false,
    profileError: null,
    updateStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopProfile.pending, (state) => {
        state.profileLoading = true;
        state.profileError = null;
      })
      .addCase(fetchShopProfile.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.profileLoading = false;
      })
      .addCase(fetchShopProfile.rejected, (state, action) => {
        state.profileLoading = false;
        state.profileError = action.payload;
      })
      .addCase(updateShopProfile.pending, (state) => {
        state.profileLoading = true;
        state.profileError = null;
        state.updateStatus = "loading";
      })
      .addCase(updateShopProfile.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.profileLoading = false;
        state.updateStatus = "succeeded";
      })
      .addCase(updateShopProfile.rejected, (state, action) => {
        state.profileLoading = false;
        state.profileError = action.payload;
        state.updateStatus = "failed";
      });
  },
});

export default shopProfileSlice.reducer;
