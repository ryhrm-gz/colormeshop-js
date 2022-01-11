import { AxiosError, AxiosInstance } from "axios";
import { ColormeCouponResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getCoupon = async (
  client: AxiosInstance,
  couponId: number
): Promise<{ shop_coupon: ColormeCouponResponse }> => {
  if (!couponId) {
    throw {
      message: "coupon_id is required",
    };
  }
  try {
    const response = await client.get(`shop_coupons/${couponId}`);
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
