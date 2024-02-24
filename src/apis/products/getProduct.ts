import { client } from '../../client';
import { ColormeProductResponse } from '../../types';

export const getProduct = async (apiKey: string, productId: string) => {
  return await client<ColormeProductResponse>(apiKey, '/v1/products', 'GET', {
    paths: [productId],
  });
};
