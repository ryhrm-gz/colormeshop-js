import { AxiosError, AxiosInstance } from "axios";
import { ColormeGiftResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getGift = async (
  client: AxiosInstance
): Promise<{ gift: ColormeGiftResponse }> => {
  try {
    const response = await client.get("gift");
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
