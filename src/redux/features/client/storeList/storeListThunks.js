import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStoreCustomer, fetchStorebyIdCus } from "./storeListApi";

export const fetchClientStore = createAsyncThunk("client/fetchCustomerStore", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchStoreCustomer();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchCustStorebyId = createAsyncThunk("client/fetchCustomerStorebyId", async (StoreId, { rejectWithValue }) => {
  try {
    const data = await fetchStorebyIdCus(StoreId);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
