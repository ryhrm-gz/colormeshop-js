import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeDeliveryDateSettingResponse,
} from '../../types';

export const getDeliveryDateSetting = async (
  client: ColormeClient
): ColormeResponse<ColormeDeliveryDateSettingResponse> => {
  return await client('/v1/deliveries/date', 'GET');
};
