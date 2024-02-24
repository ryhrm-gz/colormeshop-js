import redaxios from "redaxios";
import axios from "axios";
import { ColormeClient } from "..";

export const createAxiosClient = ({ accessToken }: ColormeClient) => {
  if (!accessToken) {
    throw {
      message: "Access token is required",
    };
  }

  if (typeof globalThis.fetch === "function") {
    return redaxios.create({
      baseURL: "https://api.shop-pro.jp/v1/",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } else {
    return axios.create({
      baseURL: "https://api.shop-pro.jp/v1/",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
};
