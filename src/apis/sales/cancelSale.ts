import { type ColormeClient } from '../../client';
import { type ColormeSaleResponse } from '../../types';

export const cancelSale = async (client: ColormeClient, saleId: string) => {
  return await client<ColormeSaleResponse>('/v1/sales', 'PUT', {
    paths: [saleId, 'cancel'],
  });
};
