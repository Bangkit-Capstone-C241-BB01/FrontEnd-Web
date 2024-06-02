import React from "react";
import SearchBar from "../../components/SearchBar";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import { user } from "../../components/Header.jsx";
const Favorites = () => {
  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <SearchBar />
      <div className="flex items-center px-4 py-2 bg-slate-100">
        <img src={user.avatar} alt="User Avatar" className="w-8 h-8 lg:w-11 lg:h-11 rounded-full mr-3" />
        <span className="text-md lg:text-xl">
          <span className="font-bold text-secondary"> John Doe</span> ' Favorites :
        </span>
      </div>
      <main className="pt-1 pb-14 lg:pb-0">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
