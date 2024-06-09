import axiosInstance from "../../../../utils/axiosConfig";

export const fetchAdminAppeal = async () => {
  const response = await axiosInstance.get("/admins/appeals", {
    role: "admin",
  });
  return response.data;
};

export const approveAppeal = async (id) => {
  const response = await axiosInstance.put(
    "/admins/appeals/approves",
    { appeal_id: id },
    {
      role: "admin",
    }
  );
  return response.data;
};

export const rejectAppeal = async (id) => {
  const response = await axiosInstance({
    method: "delete",
    url: "/admins/appeals/rejects",
    data: { appeal_id: id },
    role: "admin",
  });
  return response.data;
};
