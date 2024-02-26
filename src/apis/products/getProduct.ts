import { type ColormeClient } from '../../client';
import { type ColormeProductResponse } from '../../types';

export const getProduct = async (client: ColormeClient, productId: string) => {
  return await client<ColormeProductResponse>('/v1/products', 'GET', {
    paths: [productId],
  });
};
