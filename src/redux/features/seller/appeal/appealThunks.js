import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAppealSeller, postAppealSeller } from "./appealApi";

export const fetchHistoryAppealSeller = createAsyncThunk("appeal/fetchHistoryAppealSeller", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchAppealSeller();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const postAppealRoleSeller = createAsyncThunk("appeal/postAppealSeller", async ({ product_id, appeal_desc }, { rejectWithValue }) => {
  try {
    const data = await postAppealSeller(product_id, appeal_desc);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
