import { type ColormeClient } from '../../client';
import { type ColormeResponse, type ColormeSaleResponse } from '../../types';

export const getSale = async (
  client: ColormeClient,
  saleId: string
): ColormeResponse<ColormeSaleResponse> => {
  return await client(`/v1/sales`, 'GET', {
    paths: [saleId],
  });
};
