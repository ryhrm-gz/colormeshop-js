import { ColormePaymentResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getPayments = async (
  client: any
): Promise<{ payments: ColormePaymentResponse[] }> => {
  try {
    const response = await client.get("payments");
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
