import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCustProductbyId } from "../../redux/features/client/product/clientProductThunks";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import { FaStar } from "react-icons/fa";
import { reset } from "../../redux/features/client/product/clientProductSlice";

const DetailProdCus = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.customerProduct);
  const [productData, setProductData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCustProductbyId(id));
  }, [dispatch]);

  useEffect(() => {
    if (productState.data) {
      setProductData(productState.data);
    }
  }, [productState.data]);

  const handleBack = () => {
    dispatch(reset());
    navigate("/home");
  };
  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <SearchBar />
      <div className="flex font-roboto">
        <div className="ml-0 my-4 px-10 w-full">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-4">{productData.product_name}</h1>
          <div className="p-6 flex flex-col md:flex-row gap-10 w-full">
            <img src={productData.product_img} alt={productData.product_name} className="w-48 h-48 mb-4 self-center" />
            <div className="w-full">
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
              <p className="text-xl mb-1 pb-2 border-b border-gray-300 w-full">
                <span className="font-semibold">Store Name :</span> {productData.store_name}
              </p>
              <p className="text-xl mb-1 pb-2 border-b border-gray-300 w-full">
                <span className="font-semibold">Store Location :</span> {productData.store_location}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="mt-4 mb-20 lg:mb-0 bg-secondary text-white rounded-lg p-2 px-5" onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProdCus;
