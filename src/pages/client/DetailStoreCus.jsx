import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import { FaStar } from "react-icons/fa";
import { fetchCustStorebyId } from "../../redux/features/client/storeList/storeListThunks";
import { reset } from "../../redux/features/client/storeList/storeListSlice";

const DetailStoreCus = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state.customerStore);
  const [storeData, setStoreData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCustStorebyId(id));
  }, [dispatch]);

  useEffect(() => {
    if (storeState.data) {
      setStoreData(storeState.data);
    }
  }, [storeState.data]);

  const handleBack = () => {
    dispatch(reset());
    navigate("/store");
  };

  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <SearchBar />
      <div className="flex font-roboto">
        <div className="ml-0 my-4 px-10 w-full">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-4">{storeData.store_name}</h1>
          <div className="p-6 flex flex-col md:flex-row gap-10 w-full">
            <img src={storeData.store_img} alt={storeData.store_name} className="w-48 h-48 mb-4 self-center" />
            <div className="w-full">
              <p className="text-xl mb-1 pb-2 border-b border-gray-300 w-full">
                <span className="font-semibold">Store Location :</span> {storeData.store_location}
              </p>
              <div className="flex items-center  mb-1 w-full pb-2 border-b border-gray-300 text-xl ">
                <span className="font-semibold">Rating :</span>
                <p className="ml-2">{storeData.store_rate}</p>
                <FaStar color="yellow" className="w-5 h-5 ml-2" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="border border-gray-300 p-4 rounded-lg">{storeData.store_desc}</p>
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

export default DetailStoreCus;
