import type { ColormeClient } from '../../client';
import type {
  ColormeResponse,
  ColormeCustomerResponse,
  ColormePostCustomerRequestBody,
} from '../../types';

export const postCustomer = async (
  client: ColormeClient,
  body: ColormePostCustomerRequestBody
): ColormeResponse<ColormeCustomerResponse> => {
  return await client('/v1/customers', 'POST', {
    body,
  });
};
