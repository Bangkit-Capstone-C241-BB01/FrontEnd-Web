import axiosInstance from "../../../utils/axiosConfig";

export const loginCustomer = async (user_email, user_password) => {
  return await axiosInstance.post(
    "/login",
    { user_email, user_password },
    {
      role: "customer",
    }
  );
};

export const loginSeller = async (user_email, user_password) => {
  return await axiosInstance.post(
    "/login",
    { user_email, user_password },
    {
      role: "seller",
    }
  );
};

export const loginAdmin = async (user_email, user_password) => {
  return await axiosInstance.post(
    "/login",
    { user_email, user_password },
    {
      role: "admin",
    }
  );
};

export const registerCustomer = async (user_name, user_email, user_password) => {
  return await axiosInstance.post(
    "/register",
    { user_name, user_email, user_password, user_role: "customer" },
    {
      role: "customer",
    }
  );
};

export const registerSeller = async (user_name, user_email, user_password, store_name) => {
  return await axiosInstance.post(
    "/register",
    { user_name, user_email, user_password, user_role: "seller", store_name },
    {
      role: "seller",
    }
  );
};
