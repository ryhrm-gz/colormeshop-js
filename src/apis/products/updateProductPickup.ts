import { type ColormeClient } from '../../client';
import type {
  ColormeProductPickupResponse,
  ColormePutProductPickupRequestBody,
} from '../../types';

export const updateProductPickup = async (
  client: ColormeClient,
  productId: string,
  body: ColormePutProductPickupRequestBody
) => {
  return await client<ColormeProductPickupResponse>('/v1/products', 'PUT', {
    paths: [productId, 'pickups'],
    body,
  });
};
