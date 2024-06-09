import axiosInstance from "../../../../utils/axiosConfig";

export const fetchProductCustomer = async () => {
  const response = await axiosInstance.get("/products", {
    role: "customer",
  });
  return response.data;
};
