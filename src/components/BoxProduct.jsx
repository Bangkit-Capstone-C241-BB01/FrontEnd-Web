import { Link } from "react-router-dom";
import headset from "../assets/hetset.jpg";
import bintang from "../assets/bintang.png";
const BoxProduct = () => {
  return (
    <Link to="/detail" className="w-40 border-black border-2 rounded-xl h-52 lg:w-52 lg:h-72 overflow-hidden">
      <img src={headset} alt="" className="w-40 h-40 lg:w-52 lg:h-52 " />
      <div className="flex justify-between items-center mr-3">
        <p className="text-xl ml-2">Product</p>
        <div className="flex justify-between items-center">
          <img src={bintang} alt="" />
          <p>4.5</p>
        </div>
      </div>
      <p className="text-xl ml-2">Rp. 100.000</p>
    </Link>
  );
};

export default BoxProduct;
