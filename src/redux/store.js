import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import profileReducer from "./features/profile/profileSlice";
import productReducer from "./features/seller/product/productSlice";
import shopSellerReducer from "./features/seller/shop/shopSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    sellerProduct: productReducer,
    shopProfile: shopSellerReducer,
  },
});

export default store;
