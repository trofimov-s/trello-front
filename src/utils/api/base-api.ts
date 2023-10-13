import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { endpoints } from '@constants/api/endpoints.constant';
import { Endpoints } from '@models/api/endpoinst';
import LocalStorageHelper from '@utils/local-storage-helper';
import { LocalStorageKeys } from '@enums/local-storage-keys.enum';
import { AuthResponseI } from '@models/api/auth-response.interface';
import store from '@store/index';
import AUTH_ACTIONS from '@store/auth/auth.actions';

export abstract class BaseApi {
  protected _axiosInstance: AxiosInstance;
  protected _axiosInstanceWithoutInterceptors: AxiosInstance;

  constructor() {
    this._axiosInstanceWithoutInterceptors = this.createAxiosInstance();
    this._axiosInstance = this.createAxiosInstance();

    this._axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
      config.headers.Authorization = `Bearer ${LocalStorageHelper.getItem(LocalStorageKeys.Token)}`;
      return config;
    });

    this._axiosInstance.interceptors.response.use(
      (config: AxiosResponse) => config,
      async (err) => {
        const originalRequest = err.config;

        if (err.response.status === 401 && !err?.config?._isRetry) {
          originalRequest._isRetry = true;
          try {
            const resp = await this._axiosInstanceWithoutInterceptors.get<AuthResponseI>(
              this.buildUrl((e) => e.refresh),
            );
            LocalStorageHelper.setItem(LocalStorageKeys.Token, resp?.data?.accessToken);

            return this._axiosInstance.request(originalRequest);
          } catch (error) {
            store.dispatch(AUTH_ACTIONS.forceLogout());
          }
        }

        throw err;
      },
    );
  }

  protected get axiosInstance(): AxiosInstance {
    return this._axiosInstance;
  }

  protected get axiosInstanceWithoutInterceptor(): AxiosInstance {
    return this._axiosInstanceWithoutInterceptors;
  }

  protected buildUrl(endpointSelector: (e: Endpoints) => string): string {
    return `/${endpointSelector(endpoints)}`;
  }

  private createAxiosInstance(): AxiosInstance {
    return axios.create({
      headers: { 'Content-Type': 'application/json' },
      baseURL: import.meta.env.VITE_BASE_API_URL,
      withCredentials: true,
    });
  }
}
