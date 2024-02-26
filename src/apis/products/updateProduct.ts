import { type ColormeClient } from '../../client';
import type {
  ColormeProductResponse,
  ColormeResponse,
  ColormeUpdateProductRequestBody,
} from '../../types';

export const updateProduct = async (
  client: ColormeClient,
  productId: string,
  body: ColormeUpdateProductRequestBody
): ColormeResponse<ColormeProductResponse> => {
  return await client('/v1/products', 'PUT', {
    paths: [productId],
    body,
  });
};
