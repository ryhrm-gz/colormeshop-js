import { AxiosError, AxiosInstance } from "axios";
import { ColormeGetCouponParams, ColormeCouponResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getCoupon = async (
  client: AxiosInstance,
  params: ColormeGetCouponParams
): Promise<{ shop_coupon: ColormeCouponResponse }> => {
  if (!params.coupon_id) {
    throw {
      message: "coupon_id is required",
    };
  }
  try {
    const response = await client.get(`shop_coupons/${params.coupon_id}`);
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
