const axios = require("axios").default;
import { ColormeClient } from ".";
import { getShop } from "./utils/shop/getShop";

export const createClient = ({ accessToken }: ColormeClient) => {
  const client = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const shop = {
    getShop: () => getShop(client),
  };

  return { shop };
};
