import { type ColormeClient } from '../../client';
import { type ColormeProductPickupResponse } from '../../types';

/** @description おすすめ商品情報種別（0:おすすめ商品, 1:売れ筋商品, 3:新着商品, 4:イチオシ商品） */
type PickupType = '0' | '1' | '3' | '4';

export const deleteProductPickup = async (
  client: ColormeClient,
  productId: string,
  pickupType: PickupType
) => {
  return await client<ColormeProductPickupResponse>('/v1/products', 'DELETE', {
    paths: [productId, 'pickups', pickupType],
  });
};
