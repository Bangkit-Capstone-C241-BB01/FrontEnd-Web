import { createSlice } from "@reduxjs/toolkit";
import { fetchSellerProduct, fetchSellerProductbyId, addProduct } from "./productThunks";

const productSlice = createSlice({
  name: "sellerProduct",
  initialState: {
    data: {
      product_name: "",
      product_price: "",
      product_spec: "",
      product_desc: "",
      product_stock: "",
      product_category: "",
      img_product: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    setProductField: (state, action) => {
      const { name, value } = action.payload;
      state.data = {
        ...state.data,
        [name]: value,
      };
    },
    setImagePreviewUrl: (state, action) => {
      state.data.img_product = action.payload;
    },
    resetProduct: (state) => {
      state.data = {
        product_name: "",
        product_price: "",
        product_spec: "",
        product_desc: "",
        product_stock: "",
        product_category: "",
        img_product: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSellerProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.data;
      })
      .addCase(fetchSellerProductbyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerProductbyId.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSellerProductbyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data = null;
        state.loading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setProductField, setImagePreviewUrl, resetProduct } = productSlice.actions;
export default productSlice.reducer;
