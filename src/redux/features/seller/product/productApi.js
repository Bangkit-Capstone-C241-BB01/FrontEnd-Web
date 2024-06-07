import axiosInstance from "../../../../utils/axiosConfig";

export const fetchProductSeller = async () => {
  try {
    const response = await axiosInstance.get("/sellers/products", {
      role: "seller",
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const fetchProductbyIdSeller = async (productId) => {
  try {
    const response = await axiosInstance.get(`/sellers/products/${productId}`, {
      role: "seller",
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const addProductSeller = async (product) => {
  const formData = new FormData();
  formData.append("img_product", product.img_product);
  formData.append("product_name", product.product_name);
  formData.append("product_price", product.product_price);
  formData.append("product_spec", product.product_spec);
  formData.append("product_desc", product.product_desc);
  formData.append("product_stock", product.product_stock);
  formData.append("product_category", product.product_category);

  try {
    const response = await axiosInstance.post("/sellers/products", formData, {
      role: "seller",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
