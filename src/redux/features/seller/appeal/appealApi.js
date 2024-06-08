import axiosInstance from "../../../../utils/axiosConfig";

export const postAppealSeller = async (product_id, appeal_desc) => {
  return await axiosInstance.post(
    "/sellers/appeals",
    { product_id, appeal_desc },
    {
      role: "seller",
    }
  );
};

export const fetchAppealSeller = async () => {
  const response = await axiosInstance.get("/sellers/appeals", {
    role: "seller",
  });
  return response.data;
};
