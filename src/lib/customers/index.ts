import { AxiosInstance } from "axios";
import { ColormeAddCustomerParams, ColormeGetCustomersParams } from "../..";
import { addCustomer } from "./addCustomer";
import { getCustomer } from "./getCustomer";
import { getCustomers } from "./getCustomers";

export const createCustomers = (client: AxiosInstance) => {
  const customers = {
    /** 顧客データのリストを取得 */
    getCustomers: (params?: ColormeGetCustomersParams) =>
      getCustomers(client, params),
    /** 顧客データの取得 */
    getCustomer: (
      /** 顧客ID */
      customerId: number
    ) => getCustomer(client, customerId),
    /** 顧客データを追加 */
    addCustomer: (params: ColormeAddCustomerParams) =>
      addCustomer(client, params),
  };

  return customers;
};
