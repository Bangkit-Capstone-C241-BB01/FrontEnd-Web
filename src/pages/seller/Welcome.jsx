import logobesar from "../../assets/logobesar.png";

const Welcome = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center font-roboto">
      <img src={logobesar} alt="" className="w-2/4 lg:w-1/6" />
      <h1 className="text-3xl p-2 md:text-4xl">Welcome to Brainstore</h1>
      <button className="text-3xl bg-primary text-white p-3 m-2 rounded w-3/4 hover:opacity-75">Login</button>
      <button className="text-3xl border border-black p-2 m-2 rounded w-3/4 hover:bg-primary hover:text-white hover:opacity-75">Register</button>
    </div>
  );
};

export default Welcome;
