import { Routes, Route } from "react-router-dom";
import Product from "./pages/seller/Product";
import AddProduct from "./pages/seller/AddProduct";
import SellerProfile from "./pages/seller/SellerProfile";
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
import Profile from "./pages/client/Profile";
import RequireAuth from "./components/RequireAuth";
import ShopProfile from "./pages/seller/ShopProfile";
function App() {
  return (
    <>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <RequireAuth role="customer">
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/favorites"
          element={
            <RequireAuth role="customer">
              <Favorites />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth role="customer">
              <Profile />
            </RequireAuth>
          }
        />

        {/* Seller Routes */}
        <Route path="/seller" element={<WelcomeSeller />} />
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route
          path="/seller/products"
          element={
            <RequireAuth role="seller">
              <Product />
            </RequireAuth>
          }
        />
        <Route
          path="/seller/addProduct"
          element={
            <RequireAuth role="seller">
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/seller/profile"
          element={
            <RequireAuth role="seller">
              <SellerProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/seller/shop"
          element={
            <RequireAuth role="seller">
              <ShopProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/seller/detail/:id"
          element={
            <RequireAuth role="seller">
              <DetailProduct />
            </RequireAuth>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAuth role="admin">
              <AdminDasboard />
            </RequireAuth>
          }
        />

        <Route
          path="/admin/profile"
          element={
            <RequireAuth role="admin">
              <AdminProfile />
            </RequireAuth>
          }
        />

        <Route
          path="/admin/appeals"
          element={
            <RequireAuth role="admin">
              <AdminAppeals />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
