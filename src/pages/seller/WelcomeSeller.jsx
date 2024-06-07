import { useNavigate } from "react-router-dom";
import logobesar from "../../assets/logobesar.png";
import { useEffect } from "react";
import { getTokenSeller } from "../../utils/cookies";

const WelcomeSeller = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getTokenSeller();
    if (token) {
      navigate("/seller/products");
    }
  }, [navigate]);
  const handleLogin = () => {
    navigate("/seller/login");
  };

  const handleRegister = () => {
    navigate("/seller/register");
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center font-roboto">
      <img src={logobesar} alt="" className="w-2/4 lg:w-1/6" />
      <h1 className="text-3xl p-2 md:text-4xl">Welcome to BrainStore Seller</h1>
      <button onClick={handleLogin} className="text-3xl bg-primary text-white p-3 m-2 rounded w-3/4 md:w-2/4 hover:opacity-75 text-center">
        Login
      </button>
      <button onClick={handleRegister} className=" text-center text-3xl border border-black p-2 m-2 rounded w-3/4 md:w-2/4 hover:bg-primary hover:text-white hover:opacity-75">
        Register
      </button>
    </div>
  );
};

export default WelcomeSeller;
