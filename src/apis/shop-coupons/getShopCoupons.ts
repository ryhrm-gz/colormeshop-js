import { type ColormeClient } from '../../client';
import { type ColormeShopCouponsResponse } from '../../types';

export const getShopCoupons = async (client: ColormeClient) => {
  return await client<ColormeShopCouponsResponse>('/v1/shop_coupons', 'GET');
};
