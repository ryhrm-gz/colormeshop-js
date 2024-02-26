import { type ColormeClient } from '../../client';
import type {
  ColormeProductResponse,
  ColormeUpdateProductRequestBody,
} from '../../types';

export const updateProduct = async (
  client: ColormeClient,
  productId: string,
  body: ColormeUpdateProductRequestBody
) => {
  return await client<ColormeProductResponse>('/v1/products', 'PUT', {
    paths: [productId],
    body,
  });
};
