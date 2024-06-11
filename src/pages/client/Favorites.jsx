import React from "react";
import SearchBar from "../../components/SearchBar";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";

const Favorites = () => {
  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <SearchBar />

      <main className="pt-1 pb-14 lg:pb-0">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
