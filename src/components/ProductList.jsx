import ProductCard from "./ProductCard";
// import { products } from "../pages/seller/Product";

const ProductList = () => {
  return (
    <div className="p-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
