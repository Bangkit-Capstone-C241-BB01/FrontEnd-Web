import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchClientProduct, fetchCustProductbySort } from "../redux/features/client/product/clientProductThunks";

const ProductList = () => {
  const category = ["All", "Top Product", "Newest", "Location"];
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
  const getCategoryEndpoint = (category) => {
    switch (category) {
      case "Top Product":
        return "/customers/products/rates";
      case "Newest":
        return "/customers/products/news";
      case "Location":
        return "/customers/products/locations";
      default:
        return "/products"; // Default endpoint for "All"
    }
  };
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    const endpoint = getCategoryEndpoint(selectedCategory);
    if (selectedCategory === "All") {
      dispatch(fetchClientProduct());
    } else {
      dispatch(fetchCustProductbySort(endpoint));
    }
  };
  if (!productData || productData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="overflow-hidden px-4">
        <div className="flex gap-4 pt-2 justify-evenly overflow-y-auto">
          <div className="flex gap-3">
            <p className="text-sm md:text-lg">Sort By</p>
            <select className="min-w-32 px-2 py-1 text-sm md:text-lg bg-secondary text-white rounded-md" onChange={handleCategoryChange}>
              {category.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="p-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{productData && productData.length > 0 ? productData.map((product, index) => <ProductCard key={index} {...product} />) : <div>Loading...</div>}</div>
    </>
  );
};

export default ProductList;
