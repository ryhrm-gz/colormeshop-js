import { ColormeDeliveryResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getDeliveries = async (
  client: any
): Promise<{ deliveries: ColormeDeliveryResponse[] }> => {
  try {
    const response = await client.get("deliveries");
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
