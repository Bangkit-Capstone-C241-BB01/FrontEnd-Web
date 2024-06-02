import { useState } from "react";
import logokecil from "../../assets/logokecilbewarna.png";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/home");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col font-roboto">
      <div className="flex justify-start items-center mx-3 my-1">
        <img src={logokecil} alt="" className="w-20 md:w-1/12 lg:w-29" />
        <h1 className="text-2xl lg:text-3xl">BrainStore</h1>
      </div>
      <div className=" flex justify-center items-center mb-3">
        <div className=" rounded-xl bg-primary shadow-md  p-8 w-3/4 lg:w-2/4 text-white">
          <h2 className="text-xl md:text-2xl  mb-1 text-center">Register</h2>
          <form>
            <div className="mb-1">
              <label className="block mb-1 lg:text-xl" htmlFor="email">
                Name
              </label>
              <input type="text" id="sellerName" className="w-full p-2 text-secondary rounded mb-1" required />
              <label className="block mb-1 lg:text-xl" htmlFor="email">
                Email
              </label>
              <input type="email" id="sellerEmail" className="w-full p-2 text-secondary rounded" required />
            </div>
            <div className="mb-1 relative">
              <label className="block mb-1 lg:text-xl" htmlFor="password">
                Password
              </label>
              <input type={showPassword ? "text" : "password"} id="password" className="w-full p-2  text-secondary rounded" required />
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-9  lg:top-10  text-secondary">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="mb-6 relative">
              <label className="block mb-1 lg:text-xl" htmlFor="password">
                Confirm Password
              </label>
              <input type={showPassword ? "text" : "password"} id="password" className="w-full p-2  text-secondary rounded" required />
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-9 lg:top-10  text-secondary">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="flex justify-center">
              <button type="submit" onClick={handleRegister} className="w-1/2 bg-secondary hover:opacity-90 text-white py-2 px-4 rounded lg:text-2xl">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <div className="mt-2">
              Already have an account?
              <Link to={"/login"} className="text-secondary ml-2 hover:underline">
                Login!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
