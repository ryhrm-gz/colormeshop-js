import { client } from '../../client';
import { ColormeGetProductsQuery, ColormeProductsResponse } from '../../types';

export const getProducts = async (
  apiKey: string,
  query?: ColormeGetProductsQuery
) => {
  return await client<ColormeProductsResponse>(apiKey, '/v1/products', 'GET', {
    query,
  });
};
