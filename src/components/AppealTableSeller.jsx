import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryAppealSeller } from "../redux/features/seller/appeal/appealThunks";
const AppealTableSeller = () => {
  const dispatch = useDispatch();
  const sellerAppealState = useSelector((state) => state.appealSeller);
  const [appealData, setappealData] = useState([]);

  useEffect(() => {
    dispatch(fetchHistoryAppealSeller());
  }, [dispatch]);

  useEffect(() => {
    if (sellerAppealState.data) {
      setappealData(sellerAppealState.data);
    }
  }, [sellerAppealState.data]);
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Appeal History</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Store Name</th>
            <th className="border border-gray-200 p-2">Product Name</th>
            <th className="border border-gray-200 p-2">Appeal Description</th>
            <th className="border border-gray-200 p-2">Admin Check</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {appealData.map((appealData, index) => (
            <tr key={index}>
              <td className="border border-gray-200 p-2">{appealData.product.store.store_name}</td>
              <td className="border border-gray-200 p-2">{appealData.product.product_name}</td>
              <td className="border border-gray-200 p-2 justify-center items-center">{appealData.appeal_desc}</td>
              <td className="border border-gray-200 p-2">{appealData.is_admin_checked ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AppealTableSeller;
