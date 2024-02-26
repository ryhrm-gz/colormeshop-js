import { type ColormeClient } from '../../client';
import { type ColormeStocksResponse } from '../../types';

export const getStocks = async (client: ColormeClient) => {
  return await client<ColormeStocksResponse>('/v1/stocks', 'GET');
};
