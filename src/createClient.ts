const axios = require("axios").default;
import { ColormeClient, ColormeGetSalesParams, ColormeGetStatParams } from ".";
import { getShop } from "./utils/shop/getShop";
import { getSales } from "./utils/sales/getSales";
import { getStat } from "./utils/sales/getStat";

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
  };

  return { shop, sales };
};
