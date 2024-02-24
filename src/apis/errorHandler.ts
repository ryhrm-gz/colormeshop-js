import { ColormeError } from "..";

export const errorHandler = (error: any): ColormeError => {
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
