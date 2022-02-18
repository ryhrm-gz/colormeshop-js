import { AxiosInstance } from "axios";
import { getCoupon } from "./getCoupon";
import { getCoupons } from "./getCoupons";

export const createCoupons = (client: AxiosInstance) => {
  const coupons = {
    /** ショップクーポン一覧取得 */
    getCoupons: () => getCoupons(client),
    /** ショップクーポンの取得 */
    getCoupon: (
      /** クーポンID */
      couponId: number
    ) => getCoupon(client, couponId),
  };

  return coupons;
};
