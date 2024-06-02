import { Routes, Route } from "react-router-dom";
import Product from "./pages/seller/Product";
import AddProduct from "./pages/seller/AddProduct";
import Profile from "./pages/seller/Profile";
import DetailProduct from "./pages/seller/DetailProduct";
import AdminLogin from "./pages/admin/AdminLogin";
import SellerLogin from "./pages/seller/SellerLogin";
import SellerRegister from "./pages/seller/SellerRegister";
import AdminDasboard from "./pages/admin/AdminDasboard";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminAppeals from "./pages/admin/AdminAppeal";
import Home from "./pages/client/Home";
import WelcomeSeller from "./pages/seller/WelcomeSeller";
import Welcome from "./pages/client/Welcome";
import Login from "./pages/client/Login";
import Register from "./pages/client/Register";
import Favorites from "./pages/client/Favorites";
function App() {
  return (
    <>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />

        {/* Seller Routes */}
        <Route path="/seller" element={<WelcomeSeller />} />
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/product" element={<Product />} />
        <Route path="/seller/addProduct" element={<AddProduct />} />
        <Route path="/seller/profile" element={<Profile />} />
        <Route path="/seller/detail/:id" element={<DetailProduct />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDasboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/appeals" element={<AdminAppeals />} />
      </Routes>
    </>
  );
}

export default App;
