import { useNavigate, useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import { products } from "./Product";
import { FaStar } from "react-icons/fa";
import Header from "../../components/Header";
const DetailProduct = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const navigate = useNavigate();
  if (!product) {
    return <p>Product not found</p>;
  }
  const handleBack = () => {
    navigate("/product");
  };
  return (
    <>
      <Header />
      <div className="flex font-roboto">
        <Nav />
        <div className="ml-0 lg:ml-64 p-4 mt-5">
          <div className="p-6 flex flex-col items-start">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-48 h-48 mb-4 self-center" />
            <p className="text-xl mb-1 pb-2 border-b border-gray-300 w-full">
              <span className="font-semibold">Harga :</span> Rp {product.price.toLocaleString()}
            </p>
            <p className="text-xl mb-1 pb-2 border-b border-gray-300 w-full">
              <span className="font-semibold">Stok :</span> {product.stock}
            </p>
            <div className="flex items-center  mb-1 w-full pb-2 border-b border-gray-300 text-xl ">
              <span className="font-semibold">Rating :</span>
              <p className="ml-2">{product.rating}</p>
              <FaStar color="yellow" className="w-5 h-5 ml-2" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Deskripsi</h2>
            <p className="border border-gray-300 p-4 rounded-lg">{product.description}</p>
            <button className="mt-4 bg-secondary text-white rounded-lg p-2 px-5" onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
