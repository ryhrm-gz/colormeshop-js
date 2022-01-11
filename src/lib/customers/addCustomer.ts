import { AxiosError, AxiosInstance } from "axios";
import { ColormeAddCustomerParams, ColormeCustomerResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const addCustomer = async (
  client: AxiosInstance,
  params: ColormeAddCustomerParams
): Promise<{ customer: ColormeCustomerResponse }> => {
  try {
    const response = await client.post("customers", {
      customer: params,
    });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
