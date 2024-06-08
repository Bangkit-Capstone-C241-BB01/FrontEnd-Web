import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BoxProduct = ({ product }) => {
  const getImgQualityClass = (quality) => {
    switch (quality) {
      case "Normal":
        return "border-green-300 bg-green-300";
      case "Bokeh":
        return "border-yellow-300 bg-yellow-300";
      case "Blur":
        return "border-red-300 bg-red-300";
      default:
        return "";
    }
  };
  return (
    <Link to={`/seller/detail/${product.product_id}`} className="w-40 border-black border-2 rounded-xl h-52 lg:w-52 lg:h-72 overflow-hidden shadow-2xl">
      <img src={product.product_img} alt={product.name} className="w-40 h-40 lg:w-52 lg:h-52" />
      <div className="flex justify-between items-center mr-3 lg:mt-2 lg:text-lg text-sm">
        <p className=" ml-2">{product.product_name}</p>
        <div className="flex justify-between items-center">
          <FaStar color="yellow" />
          <p>{product.product_rate}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mr-3 lg:text-lg text-sm">
        <p className="lg:text-lg text-sm ml-1 lg:mt-1">Rp.{product.product_price}</p>
        <p className={`lg:text-lg text-sm border rounded-md px-1 lg:mt-1 ${getImgQualityClass(product.img_quality)}`}>{product.img_quality}</p>
      </div>
    </Link>
  );
};

export default BoxProduct;
