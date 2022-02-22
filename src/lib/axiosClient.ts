const axios = require("axios").default;
import { ColormeClient } from "..";

export const createAxiosClient = ({ accessToken }: ColormeClient) => {
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

  return client;
};
