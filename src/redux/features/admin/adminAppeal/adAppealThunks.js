import { createAsyncThunk } from "@reduxjs/toolkit";
import { approveAppeal, fetchAdminAppeal, rejectAppeal } from "./adAppealApi";

export const fetchAdAppeal = createAsyncThunk("dashboard/fetchAdAppeal", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchAdminAppeal();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const approveAdAppeal = createAsyncThunk("dashboard/approveAdAppeal", async (id, { rejectWithValue }) => {
  try {
    const data = await approveAppeal(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const rejectAdAppeal = createAsyncThunk("dashboard/rejectAdAppeal", async (id, { rejectWithValue }) => {
  try {
    const data = await rejectAppeal(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
