import { AxiosError, AxiosInstance } from "axios";
import { ColormeCustomerResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getCustomer = async (
  client: AxiosInstance,
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
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
