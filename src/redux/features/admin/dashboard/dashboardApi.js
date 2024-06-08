import axiosInstance from "../../../../utils/axiosConfig";

export const fetchTotal = async () => {
  const response = await axiosInstance.get("/admins/totals", {
    role: "admin",
  });
  return response.data;
};

export const fetchDashboard = async () => {
  const response = await axiosInstance.get("/admins/dashboards", {
    role: "admin",
  });
  return response.data;
};
