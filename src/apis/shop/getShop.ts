import { ColormeShopResponse } from '../..';
import { client } from '../../client';

export const getShop = async (apiKey: string) => {
  return await client<ColormeShopResponse>(apiKey, '/v1/shop', 'GET');
};
