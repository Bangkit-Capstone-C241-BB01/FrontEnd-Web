import axiosInstance from "../../../utils/axiosConfig";

export const fetchProfile = async (role) => {
  try {
    const response = await axiosInstance.get("/profiles", {
      role: role,
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
