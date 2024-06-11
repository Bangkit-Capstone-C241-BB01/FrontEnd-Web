import React from "react";
import { Link } from "react-router-dom";

const StoreList = ({ store }) => {
  if (!store || store.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {store.length > 0 ? (
        store.map((item, index) => (
          <Link key={index} to={`/detailStore/${item.store_id}`} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={item.store_img} alt={item.store_name} className="w-full h-48 object-cover" /> {/* Access properties directly from 'item' */}
            <div className="p-4">
              <h2 className="text-lg font-bold">{item.store_name}</h2>
              <p className="text-gray-700">{item.store_price}</p>
              <p className="text-yellow-500">{`⭐ ${item.store_rate}`}</p>
            </div>
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default StoreList;
