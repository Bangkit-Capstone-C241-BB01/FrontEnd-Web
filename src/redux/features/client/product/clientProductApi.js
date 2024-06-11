import axiosInstance from "../../../../utils/axiosConfig";

export const fetchProductCustomer = async () => {
  const response = await axiosInstance.get("/products", {
    role: "customer",
  });
  return response.data;
};

export const fetchProductbyIdCus = async (productId) => {
  const response = await axiosInstance.get(`/products/${productId}`, {
    role: "customer",
  });
  return response.data;
};

export const fetchProductbySort = async (path) => {
  const response = await axiosInstance.get(path, {
    role: "customer",
  });
  return response.data;
};
export const fetchProductbySearch = async (query) => {
  const response = await axiosInstance.post(
    `/customers/products`,
    {},
    {
      role: "customer",
      params: {
        product_name: query,
      },
    }
  );
  return response.data;
};
