import React from "react";

const category = ["All", "Popular", "Top Product", "Top Store", "Newest", "Location"];
const CategoryList = () => {
  return (
    <div className="overflow-hidden px-4 ">
      <div className="flex gap-4 pt-2 justify-evenly overflow-y-auto ">
        {category.map((item) => (
          <button className="min-w-32 px-2 py-1 text-sm md:text-lg bg-secondary text-white rounded-md ">{item}</button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
