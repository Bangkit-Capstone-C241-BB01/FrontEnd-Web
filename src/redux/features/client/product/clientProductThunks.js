import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductCustomer } from "./clientProductApi";

export const fetchClientProduct = createAsyncThunk("client/fetchCustomerProduct", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchProductCustomer();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
