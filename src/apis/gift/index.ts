import { getGift } from "./getGift";

export const createGift = (client: any) => {
  const gift = {
    /** ギフト設定を取得 */
    getGift: () => getGift(client),
  };

  return gift;
};
