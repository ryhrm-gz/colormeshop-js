import { type ColormeClient } from '../../client';
import {
  type ColormeCustomerResponse,
  type ColormePostCustomerRequestBody,
} from '../../types';

export const postCustomer = async (
  client: ColormeClient,
  body: ColormePostCustomerRequestBody
) => {
  return await client<ColormeCustomerResponse>('/v1/customers', 'POST', {
    body,
  });
};
