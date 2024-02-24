import { client } from '../../client';
import { ColormeProductPickupResponse } from '../../types';

/** @description おすすめ商品情報種別（0:おすすめ商品, 1:売れ筋商品, 3:新着商品, 4:イチオシ商品） */
type PickupType = '0' | '1' | '3' | '4';

export const deleteProductPickup = async (
  apiKey: string,
  productId: string,
  pickupType: PickupType
) => {
  return await client<ColormeProductPickupResponse>(
    apiKey,
    '/v1/products',
    'DELETE',
    {
      paths: [productId, 'pickups', pickupType],
    }
  );
};
