import axiosInstance from "../../../utils/axiosConfig";

export const fetchProfile = async (role) => {
  const response = await axiosInstance.get("/profiles", {
    role: role,
  });
  return response.data;
};

export const updateProfile = async (role, profileData) => {
  const response = await axiosInstance.put("/profiles", profileData, {
    role: role,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
