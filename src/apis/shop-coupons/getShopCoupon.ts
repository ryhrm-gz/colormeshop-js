import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeShopCouponResponse,
} from '../../types';

export const getShopCoupon = async (
  client: ColormeClient,
  couponId: string
): ColormeResponse<ColormeShopCouponResponse> => {
  return await client('/v1/shop_coupons', 'GET', {
    paths: [couponId],
  });
};
