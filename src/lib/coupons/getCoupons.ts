import { ColormeCouponResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getCoupons = async (
  client: any
): Promise<{ shop_coupons: ColormeCouponResponse[] }> => {
  try {
    const response = await client.get("shop_coupons");
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
