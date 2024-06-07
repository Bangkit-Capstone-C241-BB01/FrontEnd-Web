import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductSeller, fetchProductSeller, fetchProductbyIdSeller } from "./productApi";

export const fetchSellerProduct = createAsyncThunk("seller/fetchSellerProduct", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchProductSeller();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchSellerProductbyId = createAsyncThunk("seller/fetchSellerProductbyId", async (productId, { rejectWithValue }) => {
  try {
    const data = await fetchProductbyIdSeller(productId);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const addProduct = createAsyncThunk("sellerProduct/addProduct", async (product, { rejectWithValue }) => {
  try {
    const response = await addProductSeller(product);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
