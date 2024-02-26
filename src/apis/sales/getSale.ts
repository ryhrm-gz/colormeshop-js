import { type ColormeClient } from '../../client';
import { type ColormeSaleResponse } from '../../types';

export const getSale = async (client: ColormeClient, saleId: string) => {
  return await client<ColormeSaleResponse>(`/v1/sales`, 'GET', {
    paths: [saleId],
  });
};
