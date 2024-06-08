import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";
import AdminBoxTotal from "../../components/AdminBoxTotal";
import AdminDashboardTable from "../../components/AdminDashboardTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardAdmin } from "../../redux/features/admin/dashboard/dashboardThunks";

const AdminDasboard = () => {
  const dispatch = useDispatch();
  const stateDashboard = useSelector((state) => state.dashboardAdmin);
  const [dataDashboard, setDataDashboard] = useState();

  useEffect(() => {
    dispatch(fetchDashboardAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (stateDashboard.data) {
      setDataDashboard(stateDashboard.data);
    }
  }, [stateDashboard.data]);
  return (
    <>
      <Header role="admin" />
      <div className="flex ">
        <Nav role="admin" />
        <div className="ml-0 lg:ml-64 p-4 w-full font-roboto">
          <AdminBoxTotal />
          <div className="flex justify-center mt-3">
            <PieChart data={dataDashboard} />
          </div>
          {dataDashboard && <AdminDashboardTable data={dataDashboard} />}
        </div>
      </div>
    </>
  );
};

export default AdminDasboard;
