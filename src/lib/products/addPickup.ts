import { ColormeAddPickupParams, ColormePickupResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const addPickup = async (
  client: any,
  productId: number,
  params: ColormeAddPickupParams
): Promise<{ pickup: ColormePickupResponse[] }> => {
  console.log(params);
  try {
    const response = await client.post(`products/${productId}/pickups`, params);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
