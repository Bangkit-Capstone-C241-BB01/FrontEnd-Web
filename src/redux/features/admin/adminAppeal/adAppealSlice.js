import { createSlice } from "@reduxjs/toolkit";
import { approveAdAppeal, fetchAdAppeal, rejectAdAppeal } from "./adAppealThunks";
const initialState = {
  data: "",
  loading: false,
  error: null,
  success: false,
};
const adminAppealSlice = createSlice({
  name: "adminAppeal",
  initialState,
  reducers: { reset: () => initialState },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAdAppeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdAppeal.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAdAppeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(approveAdAppeal.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(approveAdAppeal.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(approveAdAppeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(rejectAdAppeal.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(rejectAdAppeal.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(rejectAdAppeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default adminAppealSlice.reducer;
