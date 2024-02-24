import { client } from '../../client';
import { ColormeStocksResponse } from '../../types';

export const getStocks = async (apiKey: string) => {
  return await client<ColormeStocksResponse>(apiKey, '/v1/stocks', 'GET');
};
