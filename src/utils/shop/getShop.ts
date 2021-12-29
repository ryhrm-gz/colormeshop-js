import { AxiosInstance } from "axios";
import { ColormeShopResponse } from "../..";
import { apiUrl } from "../..";

export const getShop = async (
  client: AxiosInstance
): Promise<ColormeShopResponse> => {
  const response = await client.get(`${apiUrl}/shop`);
  return response.data;
};
