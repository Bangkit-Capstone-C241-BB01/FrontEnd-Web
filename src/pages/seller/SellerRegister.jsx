import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/features/auth/authThunks";
import logokecil from "../../assets/logokecilbewarna.png";
import { Link, useNavigate } from "react-router-dom";
import { getTokenSeller } from "../../utils/cookies";

const SellerRegister = () => {
  const [sellerName, setSellerName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    const token = getTokenSeller();
    if (token) {
      navigate("/seller/products");
    }
  }, [navigate]);
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/seller/products");
    }
  }, [auth.isAuthenticated, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    dispatch(
      register({
        user_name: sellerName,
        user_email: sellerEmail,
        user_password: password,
        user_role: "seller",
        store_name: storeName,
      })
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col font-roboto">
      <div className="flex justify-start items-center mx-3 my-1">
        <img src={logokecil} alt="Logo" className="w-20 md:w-1/12 lg:w-29" />
        <h1 className="text-2xl lg:text-3xl">BrainStore</h1>
      </div>
      <div className="flex justify-center items-center mb-3">
        <div className="rounded-xl bg-primary shadow-md p-8 w-3/4 lg:w-2/4 text-white">
          <h2 className="text-xl md:text-2xl mb-1 text-center">Register</h2>
          {auth.error && <p className="text-red-500 text-center">{auth.error.msg}</p>}
          <form onSubmit={handleRegister}>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="mb-1">
              <label className="block mb-1 lg:text-xl" htmlFor="sellerName">
                Seller Name
              </label>
              <input type="text" id="sellerName" className="w-full p-2 text-secondary rounded mb-1" value={sellerName} onChange={(e) => setSellerName(e.target.value)} required />
              <label className="block mb-1 lg:text-xl" htmlFor="storeName">
                Store Name
              </label>
              <input type="text" id="storeName" className="w-full p-2 text-secondary rounded mb-1" value={storeName} onChange={(e) => setStoreName(e.target.value)} required />
              <label className="block mb-1 lg:text-xl" htmlFor="sellerEmail">
                Seller Email
              </label>
              <input type="email" id="sellerEmail" className="w-full p-2 text-secondary rounded" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)} required />
            </div>
            <div className="mb-1 relative">
              <label className="block mb-1 lg:text-xl" htmlFor="password">
                Password
              </label>
              <input type={showPassword ? "text" : "password"} id="password" className="w-full p-2 text-secondary rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-9 lg:top-10 text-secondary">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="mb-6 relative">
              <label className="block mb-1 lg:text-xl" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input type={showPassword ? "text" : "password"} id="confirmPassword" className="w-full p-2 text-secondary rounded" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-9 lg:top-10 text-secondary">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-1/2 bg-secondary hover:opacity-90 text-white py-2 px-4 rounded lg:text-2xl">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <div className="mt-2">
              Already have an account?
              <Link to="/seller/login" className="text-secondary ml-2 hover:underline">
                Login!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegister;
