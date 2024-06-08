import { useEffect, useState } from "react";
import logobesar from "../../assets/logobesar.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTokenAdmin } from "../../utils/cookies";
import { login } from "../../redux/features/auth/authThunks";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    const token = getTokenAdmin();
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ user_email: email, user_password: password, role: "admin" }));
  };
  if (isAuthenticated) {
    navigate("/admin/dashboard");
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center font-roboto">
      <img src={logobesar} alt="" className="w-2/4 lg:w-1/6 md:w-2/6" />
      <h1 className="text-2xl p-2 md:text-4xl">Welcome BrainStore Admin</h1>
      {loading && <div className="rounded-md  text-center bg-gray-500 mb-4 text-white-500">Loading...</div>}
      {error && <div className="rounded-md  text-center bg-red-500 mb-4 p-2 text-white-500">{error.msg}</div>}
      <form className="w-full flex flex-col justify-center items-center">
        <input type="email" id="email" className="md:text-3xl text-2xl bg-primary text-white md:p-3 md:m-2 p-1 m-1 rounded hover:opacity-90 w-3/4 md:w-2/4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <div className="relative  w-3/4 md:w-2/4">
          <input
            type={showPassword ? "text" : "password"}
            className="md:text-3xl text-2xl p-1 bg-primary text-white md:p-3  rounded hover:opacity-90 w-full"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="absolute md:top-4 right-3 top-2 text-xl text-white" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit" className="md:text-3xl text-2xl border bg-secondary text-white md:p-2 md:m-2 p-1 m-1 rounded  hover:opacity-90 self-center w-2/6 md:w-1/6" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
