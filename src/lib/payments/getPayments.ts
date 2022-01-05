import { AxiosError, AxiosInstance } from "axios";
import { ColormePaymentResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getPayments = async (
  client: AxiosInstance
): Promise<{ payments: ColormePaymentResponse[] }> => {
  try {
    const response = await client.get("payments");
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
