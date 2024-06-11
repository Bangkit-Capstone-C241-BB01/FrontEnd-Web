import { createSlice } from "@reduxjs/toolkit";
import { fetchClientProduct, fetchCustProductbyId, fetchCustProductbySearch, fetchCustProductbySort } from "./clientProductThunks";
const initialState = {
  data: "",
  loading: false,
  error: null,
};
const customerProductSlice = createSlice({
  name: "customerProduct",
  initialState,
  reducers: { reset: () => initialState },

  extraReducers: (builder) => {
    builder
      .addCase(fetchClientProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClientProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchClientProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCustProductbyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustProductbyId.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustProductbyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCustProductbySort.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustProductbySort.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustProductbySort.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCustProductbySearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustProductbySearch.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustProductbySearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { reset } = customerProductSlice.actions;
export default customerProductSlice.reducer;
