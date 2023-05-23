import { axiosInstance } from "../api/axiosInstance";

export const getUsers = async () => {
  try {
    const res = await axiosInstance.get("users/");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const res = await axiosInstance.put(`users/${userId}/`, userData);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axiosInstance.delete(`users/${userId}/`);
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post("users/", userData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
