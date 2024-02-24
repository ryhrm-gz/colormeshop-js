import { getDeliveries } from "./getDeliveries";

export const createDeliveries = (client: any) => {
  const deliveries = {
    /** 配送方法一覧を取得 */
    getDeliveries: () => getDeliveries(client),
  };

  return deliveries;
};
