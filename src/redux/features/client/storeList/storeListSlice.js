import { createSlice } from "@reduxjs/toolkit";
import { fetchClientStore, fetchCustStorebyId } from "./storeListThunks";

const initialState = {
  data: "",
  loading: false,
  error: null,
};
const customerStoreSlice = createSlice({
  name: "customerStore",
  initialState,
  reducers: { reset: () => initialState },

  extraReducers: (builder) => {
    builder
      .addCase(fetchClientStore.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClientStore.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchClientStore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCustStorebyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustStorebyId.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustStorebyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { reset } = customerStoreSlice.actions;
export default customerStoreSlice.reducer;
