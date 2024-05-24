import { Routes, Route } from "react-router-dom";
import Product from "./pages/seller/Product";
import AddProduct from "./pages/seller/AddProduct";
import Profile from "./pages/seller/Profile";
import DetailProduct from "./pages/seller/DetailProduct";
import Welcome from "./pages/seller/Welcome";
import AdminLogin from "./pages/admin/AdminLogin";
function App() {
  return (
    <>
      <Routes>
        {/* Seller Routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail" element={<DetailProduct />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
