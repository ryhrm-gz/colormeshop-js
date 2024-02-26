import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeShopCouponsResponse,
} from '../../types';

export const getShopCoupons = async (
  client: ColormeClient
): ColormeResponse<ColormeShopCouponsResponse> => {
  return await client('/v1/shop_coupons', 'GET');
};
