import { AxiosError, AxiosInstance } from "axios";
import {
  ColormeCustomerResponse,
  ColormeGetCustomersParams,
  ColormeMeta,
} from "../..";
import { errorHandler } from "../errorHandler";

export const getCustomers = async (
  client: AxiosInstance,
  params?: ColormeGetCustomersParams
): Promise<{ customers: ColormeCustomerResponse[]; meta: ColormeMeta }> => {
  try {
    const response = await client.get("customers", { params });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
