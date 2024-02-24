import { ColormeShopResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getShop = async (
  client: any
): Promise<{ shop: ColormeShopResponse }> => {
  try {
    const response = await client.get("shop");
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
