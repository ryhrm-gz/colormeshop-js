import { ColormeGetStocksParams } from "../..";
import { getStocks } from "./getStocks";

export const createStocks = (client: any) => {
  const stocks = {
    /**
     * 在庫情報の取得
     * 在庫情報を商品名や型番で検索できるAPIです。
     */
    getStocks: (params?: ColormeGetStocksParams) => getStocks(client, params),
  };

  return stocks;
};
