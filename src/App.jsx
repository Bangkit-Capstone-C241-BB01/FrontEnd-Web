import { Routes, Route } from "react-router-dom";
import Product from "./pages/seller/product";
import AddProduct from "./pages/seller/AddProduct";
import Profile from "./pages/seller/Profile";
import DetailProduct from "./pages/seller/DetailProduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail" element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;
