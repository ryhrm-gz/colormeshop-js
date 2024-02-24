import { client } from '../../client';
import { ColormePostCustomerRequestBody } from '../../types';

export const postCustomer = async (
  apiKey: string,
  body: ColormePostCustomerRequestBody
) => {
  return await client(apiKey, '/v1/customers', 'POST', {
    body,
  });
};
