import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const BoxProduct = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`} className="w-40 border-black border-2 rounded-xl h-52 lg:w-52 lg:h-72 overflow-hidden shadow-2xl">
      <img src={product.image} alt={product.name} className="w-40 h-40 lg:w-52 lg:h-52" />
      <div className="flex justify-between items-center mr-3 lg:mt-2 lg:text-lg text-sm">
        <p className=" ml-2">{product.name}</p>
        <div className="flex justify-between items-center">
          <FaStar color="yellow" />
          <p>{product.rating}</p>
        </div>
      </div>
      <p className="lg:text-lg text-sm ml-2 lg:mt-1">Rp. {product.price.toLocaleString()}</p>
    </Link>
  );
};

export default BoxProduct;
