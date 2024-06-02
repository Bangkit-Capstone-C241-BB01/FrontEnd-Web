import React from "react";

const ProductCard = ({ image, name, price, rating }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-700">{price}</p>
        <p className="text-yellow-500">{`⭐ ${rating}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
