import axiosInstance, { endpoints } from "@/utils/axios";

export const getCardData = async () => {
  try {
    const result = await axiosInstance.get(endpoints.getCardData);
    return result.data;
  } catch (error) {
    console.error('Error fetching settings:', error);
    throw error; 
  }
};
