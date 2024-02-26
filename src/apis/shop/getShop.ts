import { type ColormeResponse, type ColormeShopResponse } from '../..';
import { type ColormeClient } from '../../client';

export const getShop = async (
  client: ColormeClient
): ColormeResponse<ColormeShopResponse> => {
  return await client('/v1/shop', 'GET');
};
