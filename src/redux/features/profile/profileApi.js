import axiosInstance from "../../../utils/axiosConfig";

export const fetchProfile = async () => {
  try {
    const response = await axiosInstance.get("/profiles", {
      role: "seller",
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateProfile = async (profileData) => {
  const response = await axiosInstance.put("/profiles", profileData);
  return response.data;
};
