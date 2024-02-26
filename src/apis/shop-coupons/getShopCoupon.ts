import { type ColormeClient } from '../../client';
import { type ColormeShopCouponResponse } from '../../types';

export const getShopCoupon = async (
  client: ColormeClient,
  couponId: string
) => {
  return await client<ColormeShopCouponResponse>('/v1/shop_coupons', 'GET', {
    paths: [couponId],
  });
};
