import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductCustomer, fetchProductbyIdCus, fetchProductbySearch, fetchProductbySort } from "./clientProductApi";

export const fetchClientProduct = createAsyncThunk("client/fetchCustomerProduct", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchProductCustomer();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchCustProductbyId = createAsyncThunk("client/fetchCustomerProductbyId", async (productId, { rejectWithValue }) => {
  try {
    const data = await fetchProductbyIdCus(productId);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchCustProductbySort = createAsyncThunk("client/fetchCustomerrProductbySort", async (path, { rejectWithValue }) => {
  try {
    const data = await fetchProductbySort(path);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchCustProductbySearch = createAsyncThunk("client/fetchCustomerProductbySearch", async (query, { rejectWithValue }) => {
  try {
    const data = await fetchProductbySearch(query);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
