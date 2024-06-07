import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile, updateUserProfile } from "./profileThunks";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: null,
    profileLoading: false,
    profileError: null,
    updateStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.profileLoading = true;
        state.profileError = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.profileLoading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.profileLoading = false;
        state.profileError = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.profileLoading = true;
        state.profileError = null;
        state.updateStatus = "loading";
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.profileLoading = false;
        state.updateStatus = "succeeded";
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.profileLoading = false;
        state.profileError = action.payload;
        state.updateStatus = "failed";
      });
  },
});

export default profileSlice.reducer;
