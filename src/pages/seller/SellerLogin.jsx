import { useEffect, useState } from "react";
import logokecil from "../../assets/logokecilbewarna.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/auth/authThunks";
import { getTokenSeller } from "../../utils/cookies";

const SellerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    const token = getTokenSeller();
    if (token) {
      navigate("/seller/products");
    }
  }, [navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ user_email: email, user_password: password, role: "seller" }));
  };
  if (isAuthenticated) {
    navigate("/seller/products");
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col font-roboto">
      <div className="flex justify-start items-center m-4">
        <img src={logokecil} alt="" className="w-20 md:w-1/12 lg:w-29" />
        <h1 className="text-2xl lg:text-3xl">BrainStore</h1>
      </div>
      <div className=" flex justify-center items-center ">
        <div className=" rounded-xl bg-primary shadow-md  p-8 w-3/4 lg:w-2/4 text-white">
          <h2 className="text-2xl lg:text-4xl  mb-6 text-center">Login</h2>
          {loading && <div className="rounded-md  text-center bg-gray-500 mb-4 text-white-500">Loading...</div>}
          {error && <div className="rounded-md  text-center bg-red-500 mb-4 text-white-500">{error.msg}</div>}
          <form>
            <div className="mb-4">
              <label className="block mb-2 lg:text-xl" htmlFor="email">
                Email
              </label>
              <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="w-full p-2 text-secondary rounded" required />
            </div>
            <div className="mb-6 relative">
              <label className="block mb-2 text-xl" htmlFor="password">
                Password
              </label>
              <input type={showPassword ? "text" : "password"} id="password" onChange={(e) => setPassword(e.target.value)} className="w-full p-2  text-secondary rounded" required />
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-14 transform -translate-y-1/2 text-secondary">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="flex justify-center">
              <button type="submit" onClick={handleLogin} className="w-1/2 bg-secondary hover:opacity-90 text-white py-2 px-4 rounded lg:text-2xl">
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="block text-secondary hover:underline">
              Forgot Username / Password?
            </a>
            <div className="mt-2">
              Dont have an account?
              <Link to={"/seller/register"} className="text-secondary ml-2 hover:underline">
                Register here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
