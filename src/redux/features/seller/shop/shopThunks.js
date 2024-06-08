import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSellerShop, updateSellerShop } from "./shopApi";

export const fetchShopProfile = createAsyncThunk("shop/fetchShoprProfile", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchSellerShop();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateShopProfile = createAsyncThunk("shop/updateShopProfile", async (profileData, { rejectWithValue }) => {
  try {
    const data = await updateSellerShop(profileData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
