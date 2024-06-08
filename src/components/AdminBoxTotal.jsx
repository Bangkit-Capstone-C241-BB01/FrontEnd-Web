import { useDispatch, useSelector } from "react-redux";
import { fetchTotalAdmin } from "../redux/features/admin/dashboard/dashboardThunks";
import { useEffect, useState } from "react";

const AdminBoxTotal = () => {
  const dispatch = useDispatch();
  const boxTotalState = useSelector((state) => state.dashboardAdmin);
  const [data, setData] = useState("");

  useEffect(() => {
    dispatch(fetchTotalAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (boxTotalState.data.total) {
      setData(boxTotalState.data.total);
    }
  }, [boxTotalState.data.total, dispatch]);

  return (
    <div className="flex justify-around">
      <div className="xl:w-64 lg:w-48 lg:h-32 w-28 h-24 bg-blue-400 rounded-md flex flex-col justify-center">
        <p className="text-center text-xl font-bold">Total User</p>
        <p className="text-center text-xl">{data.total_users}</p>
      </div>
      <div className="xl:w-64 lg:w-48  lg:h-32 w-28 h-24 bg-yellow-400 rounded-md flex flex-col justify-center">
        <p className="text-center text-xl font-bold">Total Order</p>
        <p className="text-center text-xl">{data.total_orders}</p>
      </div>
      <div className="xl:w-64 lg:w-48  lg:h-32 w-28 h-24 bg-purple-400 rounded-md flex flex-col justify-center">
        <p className="text-center text-xl font-bold">Total Sales</p>
        <p className="text-center text-xl">{data.total_sales}</p>
      </div>
    </div>
  );
};

export default AdminBoxTotal;
