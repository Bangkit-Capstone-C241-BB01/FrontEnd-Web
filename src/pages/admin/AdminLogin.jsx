import { useState } from "react";
import logobesar from "../../assets/logobesar.png";

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center font-roboto">
      <img src={logobesar} alt="" className="w-2/4 lg:w-1/6 md:w-2/6" />
      <h1 className="text-2xl p-2 md:text-4xl">Welcome BrainStore Admin</h1>
      <form action="" className="w-full flex flex-col justify-center items-center">
        <input type="text" className="md:text-3xl text-2xl bg-primary text-white md:p-3 md:m-2 p-1 m-1 rounded hover:opacity-90 w-3/4" placeholder="Username" />
        <div className="relative  w-3/4">
          <input type={passwordVisible ? "text" : "password"} className="md:text-3xl text-2xl p-1 bg-primary text-white md:p-3  rounded hover:opacity-90 w-full" placeholder="Password" />
          <button type="button" className="absolute md:top-4 right-3 top-2 text-xl text-white" onClick={togglePasswordVisibility}>
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>
        <button className="md:text-3xl text-2xl border bg-secondary text-white md:p-2 md:m-2 p-1 m-1 rounded  hover:opacity-90 self-center w-2/6 md:w-1/6">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
