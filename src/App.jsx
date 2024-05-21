import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/seller/product";
import AddProduct from "./pages/seller/AddProduct";
import Profile from "./pages/seller/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<Nav />} />
        <Route path="/" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
