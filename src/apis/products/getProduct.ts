import { type ColormeClient } from '../../client';
import { type ColormeResponse, type ColormeProductResponse } from '../../types';

export const getProduct = async (
  client: ColormeClient,
  productId: string
): ColormeResponse<ColormeProductResponse> => {
  return await client('/v1/products', 'GET', {
    paths: [productId],
  });
};
