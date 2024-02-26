import { type ColormeClient } from '../../client';
import { type ColormeResponse, type ColormeStocksResponse } from '../../types';

export const getStocks = async (
  client: ColormeClient
): ColormeResponse<ColormeStocksResponse> => {
  return await client('/v1/stocks', 'GET');
};
