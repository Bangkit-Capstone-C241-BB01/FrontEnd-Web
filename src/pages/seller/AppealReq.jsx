import { useNavigate, useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import { FaStar } from "react-icons/fa";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSellerProductbyId } from "../../redux/features/seller/product/productThunks";
import { postAppealRoleSeller } from "../../redux/features/seller/appeal/appealThunks";

const AppealReq = () => {
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

  const handleBack = () => {
    navigate(`/seller/detail/${id}`);
  };

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

  const [appealDesc, setAppealDesc] = useState("");
  const sellerAppealState = useSelector((state) => state.appealSeller);
  const handleSendAppeal = () => {
    dispatch(postAppealRoleSeller({ product_id: id, appeal_desc: appealDesc }));
  };

  return (
    <>
      <Header role="seller" />
      <div className="flex font-roboto">
        <Nav role="seller" />
        <div className="ml-0 lg:ml-64 px-4 w-full">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Appeal Request</h1>
          <div className="p-6 flex flex-col md:flex-row gap-10 w-full">
            <img src={productData.product_img} alt={productData.product_name} className="w-48 h-48 mb-4 self-center" />
            <div className="w-full">
              <p className="text-xl mb-1 pb-2 border-b border-gray-300 w-full">
                <span className="font-semibold">Product Name :</span> {productData.product_name}
              </p>
              <div className="flex items-center  mb-1 w-full pb-2 border-b border-gray-300 text-xl ">
                <span className="font-semibold">Rating :</span>
                <p className="ml-2">{productData.product_rate}</p>
                <FaStar color="yellow" className="w-5 h-5 ml-2" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Image Quality </h2>
              <p className={`lg:text-lg text-sm border rounded-md px-1 lg:mt-1 text-center ${getImgQualityClass(productData.img_quality)}`}>{productData.img_quality}</p>
              <div className="mb-4">
                <label className="block text-xl font-bold mb-2" htmlFor="appeal_desc">
                  Appeal Description
                </label>
                <textarea
                  id="appeal_desc"
                  name="appeal_desc"
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-24"
                  required
                  value={appealDesc}
                  onChange={(e) => setAppealDesc(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="mt-4 bg-secondary text-white rounded-lg p-2 px-5" onClick={handleBack}>
              Back
            </button>
            {sellerAppealState.success && (
              <div className="text-center mt-4 p-2 px-5 bg-green-500 text-white rounded-lg">
                <p>Success Send Appeal</p>
              </div>
            )}
            {sellerAppealState.error && (
              <div className="text-center mt-4 p-2 px-5 bg-red-500 text-white rounded-lg">
                <p>Error: {sellerAppealState.error.msg}</p>
              </div>
            )}
            {sellerAppealState.loading && (
              <div className="text-center mt-4 p-2 px-5 bg-grey-500 text-white rounded-lg">
                <p>Loading...</p>
              </div>
            )}
            <button className="mt-4 p-2 px-5 bg-primary text-white rounded-lg" onClick={handleSendAppeal}>
              Send Appeal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppealReq;
