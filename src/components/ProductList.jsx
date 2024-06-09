import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchClientProduct } from "../redux/features/client/product/clientProductThunks";

const ProductList = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.customerProduct);
  const [productData, setProductData] = useState();

  useEffect(() => {
    dispatch(fetchClientProduct());
  }, [dispatch]);

  useEffect(() => {
    if (productState.data) {
      setProductData(productState.data);
    }
  }, [productState.data]);

  if (!productData || productData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productData.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
