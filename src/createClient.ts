const axios = require("axios").default;
import { ColormeClient, ColormeGetSalesRequest } from ".";
import { getShop } from "./utils/shop/getShop";
import { getSales } from "./utils/sales/getSales";

export const createClient = ({ accessToken }: ColormeClient) => {
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
    getSales: (query?: ColormeGetSalesRequest) => getSales(client, query),
  };

  return { shop, sales };
};
