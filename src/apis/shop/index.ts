import { getShop } from "./getShop";

export const createShop = (client: any) => {
  const shop = {
    /**
     * ショップ情報の取得
     * ショップ名などの基本的な情報を取得することができるAPIです。
     */
    getShop: () => getShop(client),
  };

  return shop;
};
