const axios = require("axios").default;
import {
  ColormeClient,
  ColormeGetCustomerParams,
  ColormeGetCustomersParams,
  ColormeGetProductParams,
  ColormeGetProductsParams,
  ColormeGetSaleParams,
  ColormeGetSalesParams,
  ColormeGetStatParams,
} from ".";
import { getShop } from "./lib/shop/getShop";
import { getSales } from "./lib/sales/getSales";
import { getStat } from "./lib/sales/getStat";
import { getSale } from "./lib/sales/getSale";
import { getCustomers } from "./lib/customers/getCustomers";
import { getCustomer } from "./lib/customers/getCustomer";
import { getProducts } from "./lib/products/getProducts";
import { getProduct } from "./lib/products/getProduct";

export const createClient = ({ accessToken }: ColormeClient) => {
  if (!accessToken) {
    throw {
      message: "Access token is required",
    };
  }
  const client = axios.create({
    baseURL: "https://api.shop-pro.jp/v1/",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const shop = {
    /**
     * ショップ情報の取得
     * ショップ名などの基本的な情報を取得することができるAPIです。
     */
    getShop: () => getShop(client),
  };
  const sales = {
    /**
     * 受注データのリストを取得
     * 受注データのリストを取得します。（日付が指定されていない場合は直近1週間分を取得します。）
     */
    getSales: (params?: ColormeGetSalesParams) => getSales(client, params),
    /** 売上集計の取得 */
    getStat: (params?: ColormeGetStatParams) => getStat(client, params),
    /** 受注データの取得 */
    getSale: (params: ColormeGetSaleParams) => getSale(client, params),
  };
  const customers = {
    /** 顧客データのリストを取得 */
    getCustomers: (params?: ColormeGetCustomersParams) =>
      getCustomers(client, params),
    /** 顧客データの取得 */
    getCustomer: (params: ColormeGetCustomerParams) =>
      getCustomer(client, params),
  };
  const products = {
    /** 商品一覧の取得 */
    getProducts: (params?: ColormeGetProductsParams) =>
      getProducts(client, params),
    /** 商品データの取得 */
    getProduct: (params: ColormeGetProductParams) => getProduct(client, params),
  };

  return { shop, sales, customers, products };
};
