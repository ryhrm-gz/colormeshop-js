import { AxiosError } from "axios";
import { ColormeError } from "..";

export const errorHandler = (error: AxiosError): ColormeError => {
  if (error.response) {
    const res = {
      error: {
        status: error.response.status,
        error: error.response.data,
        message: error.message,
      },
    };
    return res;
  } else {
    const res = {
      error: {
        status: 500,
        message: error.message,
      },
    };
    return res;
  }
};
