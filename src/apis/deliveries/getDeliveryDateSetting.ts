import { client } from '../../client';
import { ColormeDeliveryDateSettingResponse } from '../../types';

export const getDeliveryDateSetting = async (apiKey: string) => {
  return await client<ColormeDeliveryDateSettingResponse>(
    apiKey,
    '/v1/deliveries/date',
    'GET'
  );
};
