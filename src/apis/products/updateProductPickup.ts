import { type ColormeClient } from '../../client';
import type {
  ColormeProductPickupResponse,
  ColormePutProductPickupRequestBody,
  ColormeResponse,
} from '../../types';

export const updateProductPickup = async (
  client: ColormeClient,
  productId: string,
  body: ColormePutProductPickupRequestBody
): ColormeResponse<ColormeProductPickupResponse> => {
  return await client('/v1/products', 'PUT', {
    paths: [productId, 'pickups'],
    body,
  });
};
