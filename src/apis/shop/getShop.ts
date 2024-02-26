import { type ColormeShopResponse } from '../..';
import { type ColormeClient } from '../../client';

export const getShop = async (client: ColormeClient) => {
  return await client<ColormeShopResponse>('/v1/shop', 'GET');
};
