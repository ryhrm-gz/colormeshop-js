import { AxiosError, AxiosInstance } from "axios";
import { ColormeDeletePickupParams, ColormePickupResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const deletePickup = async (
  client: AxiosInstance,
  params: ColormeDeletePickupParams
): Promise<{ pickup: ColormePickupResponse[] }> => {
  try {
    const response = await client.delete(
      `products/${params.product_id}/pickups/${params.pickup_type}`
    );
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
