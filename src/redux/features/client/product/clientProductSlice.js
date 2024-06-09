import { createSlice } from "@reduxjs/toolkit";
import { fetchClientProduct } from "./clientProductThunks";
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
      });
  },
});

export default customerProductSlice.reducer;
