import { type ColormeClient } from '../../client';
import { type ColormeDeliveryDateSettingResponse } from '../../types';

export const getDeliveryDateSetting = async (client: ColormeClient) => {
  return await client<ColormeDeliveryDateSettingResponse>(
    '/v1/deliveries/date',
    'GET'
  );
};
