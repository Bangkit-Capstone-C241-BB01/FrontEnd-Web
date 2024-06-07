import React, { useEffect, useState } from "react";
import BoxProduct from "./BoxProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerProduct } from "../redux/features/seller/product/productThunks";
const BoxProductContainer = () => {
  const dispatch = useDispatch();
  const sellerProductState = useSelector((state) => state.sellerProduct);
  const [productData, setProductData] = useState({ products: [] });

  useEffect(() => {
    dispatch(fetchSellerProduct());
  }, [dispatch]);

  useEffect(() => {
    if (sellerProductState.data) {
      setProductData(sellerProductState.data);
    }
  }, [sellerProductState.data]);
  return (
    <div className="font-roboto ml-4 lg:ml-72 mt-5 flex gap-9 w-full flex-wrap">
      {sellerProductState.loading ? (
        <p>Loading...</p>
      ) : sellerProductState.error ? (
        <p>Error: {sellerProductState.error}</p>
      ) : productData.products && productData.products.length > 0 ? (
        productData.products.map((product) => <BoxProduct key={product.product_id} product={product} />)
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default BoxProductContainer;
