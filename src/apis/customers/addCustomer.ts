import { ColormeAddCustomerParams, ColormeCustomerResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const addCustomer = async (
  client: any,
  params: ColormeAddCustomerParams
): Promise<{ customer: ColormeCustomerResponse }> => {
  try {
    const response = await client.post("customers", {
      customer: params,
    });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
