import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDashboard, fetchTotal } from "./dashboardApi";

export const fetchTotalAdmin = createAsyncThunk("dashboard/fetchTotalAdmin", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchTotal();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchDashboardAdmin = createAsyncThunk("dashboard/fetchDashboardAdmin", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchDashboard();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
