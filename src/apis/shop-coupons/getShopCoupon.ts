import { client } from '../../client';
import { ColormeShopCouponResponse } from '../../types';

export const getShopCoupon = async (apiKey: string, couponId: string) => {
  return await client<ColormeShopCouponResponse>(
    apiKey,
    '/v1/shop_coupons',
    'GET',
    {
      paths: [couponId],
    }
  );
};
