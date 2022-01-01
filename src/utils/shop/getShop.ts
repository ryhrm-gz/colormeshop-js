import { AxiosError, AxiosInstance } from "axios";
import { errorHandler } from "../errorHandler";
import { ColormeShopResponse } from "../..";

export const getShop = async (
  client: AxiosInstance
): Promise<ColormeShopResponse> => {
  try {
    const response = await client.get(`shop`);
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
