import { AxiosInstance } from "axios";
import { getDeliveries } from "./getDeliveries";

export const createDeliveries = (client: AxiosInstance) => {
  const deliveries = {
    /** 配送方法一覧を取得 */
    getDeliveries: () => getDeliveries(client),
  };

  return deliveries;
};
