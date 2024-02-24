import { client } from '../../client';
import { ColormeDeliveryDateSettingResponse } from '../../types';

export const getDeliveryDateSetting = async (apiKey: string) => {
  return await client<ColormeDeliveryDateSettingResponse>(
    apiKey,
    '/v1/deliveries/date',
    'GET'
  );
};

getDeliveryDateSetting(
  '5920abd3832915c2561ee9eb073d7c993a57f82887ed9f5ff777b1fd3f593480'
).then(console.log);
