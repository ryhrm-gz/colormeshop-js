import { type ColormeClient } from '../../client';
import type {
  ColormeResponse,
  ColormeSaleResponse,
  ColormeUpdateSaleRequestBody,
} from '../../types';

export const updateSale = async (
  client: ColormeClient,
  saleId: string,
  body: ColormeUpdateSaleRequestBody
): ColormeResponse<ColormeSaleResponse> => {
  return await client('/v1/sales', 'PUT', {
    paths: [saleId],
    body,
  });
};
