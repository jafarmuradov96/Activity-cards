import axiosInstance, { endpoints } from "@/utils/axios";

export const getHero = async () => {
  try {
    const result = await axiosInstance.get(endpoints.getHero);
    return result.data;
  } catch (error) {
    console.error('Error fetching settings:', error);
    throw error; 
  }
};
