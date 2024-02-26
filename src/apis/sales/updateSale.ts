import { type ColormeClient } from '../../client';
import type {
  ColormeSaleResponse,
  ColormeUpdateSaleRequestBody,
} from '../../types';

export const updateSale = async (
  client: ColormeClient,
  saleId: string,
  body: ColormeUpdateSaleRequestBody
) => {
  return await client<ColormeSaleResponse>('/v1/sales', 'PUT', {
    paths: [saleId],
    body,
  });
};
