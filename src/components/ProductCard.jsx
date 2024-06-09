import React from "react";

const ProductCard = ({ product_img, product_name, product_price, product_rate }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={product_img} alt={product_name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product_name}</h2>
        <p className="text-gray-700">{product_price}</p>
        <p className="text-yellow-500">{`⭐ ${product_rate}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
