import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ product }) => {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {product ? (
        product.products.map((item, index) => (
          <Link key={index} to={`/detail/${item.product_id}`} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={item.product_img} alt={item.product_name} className="w-full h-48 object-cover" /> {/* Access properties directly from 'item' */}
            <div className="p-4">
              <h2 className="text-lg font-bold">{item.product_name}</h2>
              <p className="text-gray-700">{item.product_price}</p>
              <p className="text-yellow-500">{`⭐ ${item.product_rate}`}</p>
            </div>
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SearchResult;
