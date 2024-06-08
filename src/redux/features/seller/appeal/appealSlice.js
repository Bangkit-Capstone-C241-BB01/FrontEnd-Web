import { createSlice } from "@reduxjs/toolkit";
import { fetchHistoryAppealSeller, postAppealRoleSeller } from "./appealThunks";

const appealSellerSlice = createSlice({
  name: "appealSeller",
  initialState: {
    data: "",
    loading: false,
    error: null,
    updateStatus: "idle",
    success: false,
  },
  reducers: {
    resetAppealStatus: (state) => {
      state.updateStatus = "idle";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoryAppealSeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistoryAppealSeller.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchHistoryAppealSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postAppealRoleSeller.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.updateStatus = "loading";
        state.success = false;
      })
      .addCase(postAppealRoleSeller.fulfilled, (state) => {
        state.loading = false;
        state.updateStatus = "succeeded";
        state.success = true;
      })
      .addCase(postAppealRoleSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.updateStatus = "failed";
        state.success = false;
      });
  },
});

export default appealSellerSlice.reducer;
