import axiosInstance from "../../../../utils/axiosConfig";

export const fetchStoreCustomer = async () => {
  const response = await axiosInstance.get("/stores", {
    role: "customer",
  });
  return response.data;
};

export const fetchStorebyIdCus = async (storeId) => {
  const response = await axiosInstance.get(`/stores/${storeId}`, {
    role: "customer",
  });
  return response.data;
};
