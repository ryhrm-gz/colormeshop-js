import { ColormeDeletePickupParams, ColormePickupResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const deletePickup = async (
  client: any,
  params: ColormeDeletePickupParams
): Promise<{ pickup: ColormePickupResponse[] }> => {
  try {
    const response = await client.delete(
      `products/${params.product_id}/pickups/${params.pickup_type}`
    );
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
