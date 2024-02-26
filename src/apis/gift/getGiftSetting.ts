import { type ColormeClient } from '../../client';
import { type ColormeGiftSettingResponse } from '../../types';

export const getGiftSetting = async (client: ColormeClient) => {
  return await client<ColormeGiftSettingResponse>('/v1/gift', 'GET');
};
