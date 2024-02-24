import { client } from '../../client';
import { ColormeGiftSettingResponse } from '../../types';

export const getGiftSetting = async (apiKey: string) => {
  return await client<ColormeGiftSettingResponse>(apiKey, '/v1/gift', 'GET');
};
