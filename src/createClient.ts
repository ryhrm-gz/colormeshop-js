const axios = require("axios").default;
import {
  ColormeClient,
  ColormeGetCustomersParams,
  ColormeGetSaleParams,
  ColormeGetSalesParams,
  ColormeGetStatParams,
} from ".";
import { getShop } from "./lib/shop/getShop";
import { getSales } from "./lib/sales/getSales";
import { getStat } from "./lib/sales/getStat";
import { getSale } from "./lib/sales/getSale";
import { getCustomers } from "./lib/customers/getCustomers";

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
    getShop: () => getShop(client),
  };
  const sales = {
    getSales: (params?: ColormeGetSalesParams) => getSales(client, params),
    getStat: (params?: ColormeGetStatParams) => getStat(client, params),
    getSale: (params: ColormeGetSaleParams) => getSale(client, params),
  };
  const customers = {
    getCustomers: (params?: ColormeGetCustomersParams) =>
      getCustomers(client, params),
  };

  return { shop, sales, customers };
};
