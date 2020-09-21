import axios, { AxiosInstance, AxiosResponse } from 'axios';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(
    token: string,
    baseURL: string = 'https://trefle.io/api/v1'
  ) {
    this.instance = axios.create({
      baseURL,
      params: {
        token,
      },
      headers: {
        post: {
          'Content-Type': 'application/json',
        },
      },
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;
  protected _handleError = (error: any) => Promise.reject(error);
}
