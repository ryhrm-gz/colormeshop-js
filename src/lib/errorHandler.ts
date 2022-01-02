import { AxiosError } from "axios";
import { ColormeError } from "..";

export const errorHandler = (error: AxiosError): ColormeError => {
  if (error.response) {
    const res = {
      status: error.response.status,
      error: error.response.data,
      message: error.message,
    };
    return res;
  } else {
    const res = {
      status: 500,
      message: error.message,
    };
    return res;
  }
};
