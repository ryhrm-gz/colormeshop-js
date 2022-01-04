import { AxiosError, AxiosInstance } from "axios";
import { ColormeGetCustomerParamas, ColormeCustomerResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getCustomer = async (
  client: AxiosInstance,
  params: ColormeGetCustomerParamas
): Promise<{ customer: ColormeCustomerResponse }> => {
  if (!params.customer_id) {
    throw {
      message: "customer_id is required",
    };
  }
  try {
    const response = await client.get(`customers/${params.customer_id}`);
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
