import type { ColormeClient } from '../../client';
import type {
  ColormeResponse,
  ColormeCustomersResponse,
  ColormeGetCustomersQuery,
} from '../../types';

export const getCustomers = async (
  client: ColormeClient,
  query?: ColormeGetCustomersQuery
): ColormeResponse<ColormeCustomersResponse> => {
  return await client('/v1/customers', 'GET', {
    query,
  });
};
