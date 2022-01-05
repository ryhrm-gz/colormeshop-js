import { AxiosError, AxiosInstance } from "axios";
import { ColormeDeliveryResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getDeliveries = async (
  client: AxiosInstance
): Promise<{ deliveries: ColormeDeliveryResponse[] }> => {
  try {
    const response = await client.get("deliveries");
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
