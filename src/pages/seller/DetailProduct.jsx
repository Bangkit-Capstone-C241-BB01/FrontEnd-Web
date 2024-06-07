import { useNavigate, useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import { FaStar } from "react-icons/fa";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSellerProductbyId } from "../../redux/features/seller/product/productThunks";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sellerProductState = useSelector((state) => state.sellerProduct);
  const [productData, setProductData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProductbyId(id));
  }, [dispatch]);

  useEffect(() => {
    if (sellerProductState.data) {
      setProductData(sellerProductState.data);
    }
  }, [sellerProductState.data]);

  console.log(productData);
  const handleBack = () => {
    navigate("/seller/products");
  };
  return (
    <>
      <Header role="seller" />
      <div className="flex font-roboto">
        <Nav role="seller" />
        <div className="ml-0 lg:ml-64 px-4 ">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-4">{productData.product_name}</h1>
          <div className="p-6 flex flex-col md:flex-row gap-10">
            <img src={productData.product_img} alt={productData.product_name} className="w-48 h-48 mb-4 self-center" />
            <div>
              <p className="text-xl mb-1 pb-2 border-b border-gray-300 w-full">
                <span className="font-semibold">Price :</span> Rp {productData.product_price}
              </p>
              <p className="text-xl mb-1 pb-2 border-b border-gray-300 w-full">
                <span className="font-semibold">Category :</span> {productData.product_category}
              </p>
              <p className="text-xl mb-1 pb-2 border-b border-gray-300 w-full">
                <span className="font-semibold">Stock :</span> {productData.product_stock}
              </p>
              <div className="flex items-center  mb-1 w-full pb-2 border-b border-gray-300 text-xl ">
                <span className="font-semibold">Rating :</span>
                <p className="ml-2">{productData.product_rate}</p>
                <FaStar color="yellow" className="w-5 h-5 ml-2" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="border border-gray-300 p-4 rounded-lg">{productData.product_desc}</p>
              <h2 className="text-xl font-semibold mb-2">Specification</h2>
              <p className="border border-gray-300 p-4 rounded-lg">{productData.product_spec}</p>
            </div>
          </div>
          <button className="mt-4 bg-secondary text-white rounded-lg p-2 px-5" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
