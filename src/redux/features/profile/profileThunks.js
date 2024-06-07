import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProfile, updateProfile } from "./profileApi";

export const fetchUserProfile = createAsyncThunk("profile/fetchUserProfile", async (role, { rejectWithValue }) => {
  try {
    const data = await fetchProfile(role);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateUserProfile = createAsyncThunk("profile/updateUserProfile", async (profileData, { rejectWithValue }) => {
  try {
    const data = await updateProfile(profileData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
