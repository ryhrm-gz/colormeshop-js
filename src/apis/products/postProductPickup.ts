import { type ColormeClient } from '../../client';
import {
  type ColormeProductPickupResponse,
  type ColormePutProductPickupRequestBody,
} from '../../types';

export const postProductPickup = async (
  client: ColormeClient,
  productId: string,
  body: ColormePutProductPickupRequestBody
) => {
  return await client<ColormeProductPickupResponse>('/v1/products', 'POST', {
    paths: [productId, 'pickups'],
    body,
  });
};
