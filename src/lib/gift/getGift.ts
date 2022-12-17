import { ColormeGiftResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getGift = async (
  client: any
): Promise<{ gift: ColormeGiftResponse }> => {
  try {
    const response = await client.get("gift");
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
