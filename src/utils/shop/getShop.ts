import { AxiosInstance } from "axios";
import { apiUrl } from "../..";

export const getShop = async (client: AxiosInstance) => {
  const response = await client.get(`${apiUrl}/shop`);
  return response.data;
};
