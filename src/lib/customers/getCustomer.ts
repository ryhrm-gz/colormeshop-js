import { ColormeCustomerResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getCustomer = async (
  client: any,
  customerId: number
): Promise<{ customer: ColormeCustomerResponse }> => {
  if (!customerId) {
    throw {
      message: "customer_id is required",
    };
  }
  try {
    const response = await client.get(`customers/${customerId}`);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
