import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormePaymentsResponse,
} from '../../types';

export const getPayments = async (
  client: ColormeClient
): ColormeResponse<ColormePaymentsResponse> => {
  return await client('/v1/payments', 'GET');
};
