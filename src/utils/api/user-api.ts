import { ConfirmPasswordI, LoginFormI, ResetPasswordI, SignupFormI } from '@models/form/auth-form';
import { BaseApi } from './base-api';
import { AuthResponseI } from '@models/api/auth-response.interface';
import { StatusResponseI } from '@models/api/auth-status-response.type';
import { ConfirmPasswordPayloadI } from '@models/api/confirm-password-payload.interface';

class UserApiI extends BaseApi {
  private static _instance: UserApiI;

  static get Instance(): UserApiI {
    return this._instance || (this._instance = new this());
  }

  async login(credentials: LoginFormI): Promise<AuthResponseI> {
    const response = await this.axiosInstance.post<AuthResponseI>(
      this.buildUrl((e) => e.login),
      credentials,
    );

    return response.data;
  }

  async signup(credentials: SignupFormI): Promise<AuthResponseI> {
    const response = await this.axiosInstance.post<AuthResponseI>(
      this.buildUrl((e) => e.signup),
      credentials,
    );

    return response.data;
  }

  async logout(): Promise<StatusResponseI> {
    const { data } = await this.axiosInstance.get<StatusResponseI>(this.buildUrl((e) => e.logout));

    return data;
  }

  async forceAuth(): Promise<AuthResponseI> {
    const response = await this.axiosInstanceWithoutInterceptor.get<AuthResponseI>(
      this.buildUrl((e) => e.refresh),
    );

    return response.data;
  }

  async resetPassword(credentials: ResetPasswordI): Promise<StatusResponseI> {
    const response = await this.axiosInstanceWithoutInterceptor.post<StatusResponseI>(
      this.buildUrl((e) => e.reset),
      credentials,
    );

    return response.data;
  }

  async resetConfirmPassword(credentials: ConfirmPasswordPayloadI): Promise<StatusResponseI> {
    const response = await this.axiosInstanceWithoutInterceptor.patch<StatusResponseI>(
      this.buildUrl((e) => e.confirmPass),
      credentials,
    );

    return response.data;
  }

  async test(): Promise<{ a: string }> {
    return this.axiosInstance
      .get<{ a: string }>(this.buildUrl((e) => e.test))
      .then(({ data }) => data);
  }
}

const UserApi = UserApiI.Instance;
export default UserApi;
