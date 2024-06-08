import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboardAdmin, fetchTotalAdmin } from "./dashboardThunks";
const initialState = {
  data: {
    total: "",
    dashboard: "",
  },
  loading: false,
  error: null,
};
const dashboardAdminSlice = createSlice({
  name: "dashboardAdmin",
  initialState,
  reducers: { reset: () => initialState },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTotalAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTotalAdmin.fulfilled, (state, action) => {
        state.data.total = action.payload;
        state.loading = false;
      })
      .addCase(fetchTotalAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDashboardAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardAdmin.fulfilled, (state, action) => {
        state.data.dashboard = action.payload;
        state.loading = false;
      })
      .addCase(fetchDashboardAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = dashboardAdminSlice.actions;
export default dashboardAdminSlice.reducer;
