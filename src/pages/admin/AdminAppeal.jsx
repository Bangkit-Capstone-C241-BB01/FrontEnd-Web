import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdAppeal } from "../../redux/features/admin/adminAppeal/adAppealThunks";
import AppealTableAdmin from "../../components/AppealTableAdmin";

const AdminAppeals = () => {
  const dispatch = useDispatch();
  const appealState = useSelector((state) => state.adminAppeal);
  const [appealData, setAppealData] = useState();

  useEffect(() => {
    dispatch(fetchAdAppeal());
  }, [dispatch]);

  useEffect(() => {
    if (appealState.data) {
      setAppealData(appealState.data);
    }
  }, [appealState.data]);

  return (
    <>
      <Header role="admin" />
      <div className="flex ">
        <Nav role="admin" />
        {appealData ? <AppealTableAdmin data={appealData} /> : <div className="ml-80">Loading...</div>}
      </div>
    </>
  );
};

export default AdminAppeals;
