import { paths } from './generated/types.gen';
import { ColormeErrorResponse } from './types';

type ApiPath = keyof paths;

const DEFAULT_BASE_URL = 'https://api.shop-pro.jp';

export const initializeClient = (
  apiKey: string,
  options?: ColormeClientOptions
) => {
  const client = async <Response = unknown, Query = unknown, Body = unknown>(
    apiPath: ApiPath,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    params: {
      paths?: string[];
      query?: Query;
      body?: Body;
    } = {}
  ) => {
    const baseUrl = options?.overrideBaseUrl ?? DEFAULT_BASE_URL;
    const url = new URL(`${baseUrl}${apiPath}`);
    const headers: RequestInit['headers'] = {
      Authorization: `Bearer ${apiKey}`,
    };
    const fetchOptions: RequestInit = {
      method,
      headers,
    };

    if (params?.paths) {
      params.paths.forEach((path) => {
        url.pathname += `/${path}`;
      });
    }
    if (params?.query) {
      url.search = new URLSearchParams(
        params.query as Record<string, string>
      ).toString();
    }
    if (params?.body) {
      fetchOptions.body = JSON.stringify(params.body);
      headers['Content-Type'] = 'application/json';
    }

    let data: Response | null = null;
    let error: ColormeErrorResponse | null = null;

    try {
      const res = await fetch(url.toString(), fetchOptions);
      if (!res.ok) {
        const errorData = await res.json();
        const hasErrors =
          'errors' in errorData && Array.isArray(errorData.errors);
        error = hasErrors
          ? errorData
          : {
              errors: [
                {
                  code: res.status ?? 500,
                  message: res.statusText ?? 'Internal Server Error',
                  status: res.status ?? 500,
                },
              ],
            };
      } else {
        data = await res.json();
      }
    } catch (e) {
      error = {
        errors: [
          {
            code: 500,
            message: 'Internal Server Error',
            status: 500,
          },
        ],
      };
    }

    return { data, error };
  };

  return client;
};

export type ColormeClient = ReturnType<typeof initializeClient>;
export type ColormeClientOptions = {
  /**
   * Override the base URL of the API.
   * Default: https://api.shop-pro.jp
   */
  overrideBaseUrl?: string;
};
