import axiosInstance from "../../../../utils/axiosConfig";

export const fetchSellerShop = async () => {
  const response = await axiosInstance.get("/sellers/store", {
    role: "seller",
  });
  return response.data;
};

export const updateSellerShop = async (profileData) => {
  const response = await axiosInstance.put("/sellers/store", profileData, {
    role: "seller",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
