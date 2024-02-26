import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormePostProductRequestBody,
  type ColormeProductResponse,
} from '../../types';

export const postProduct = async (
  client: ColormeClient,
  body: ColormePostProductRequestBody
): ColormeResponse<ColormeProductResponse> => {
  return await client('/v1/products', 'POST', {
    body,
  });
};
