import { AxiosError, AxiosInstance } from "axios";
import { ColormeShopResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getShop = async (
  client: AxiosInstance
): Promise<{ shop: ColormeShopResponse }> => {
  try {
    const response = await client.get("shop");
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
