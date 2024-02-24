import { client } from '../../client';
import { ColormeShopCouponsResponse } from '../../types';

export const getShopCoupons = async (apiKey: string) => {
  return await client<ColormeShopCouponsResponse>(
    apiKey,
    '/v1/shop_coupons',
    'GET'
  );
};
