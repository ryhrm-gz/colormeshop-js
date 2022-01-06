import { AxiosError, AxiosInstance } from "axios";
import { ColormeCouponResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getCoupons = async (
  client: AxiosInstance
): Promise<{ shop_coupons: ColormeCouponResponse[] }> => {
  try {
    const response = await client.get("shop_coupons");
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
