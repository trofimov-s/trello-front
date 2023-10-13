import { createAsyncThunk } from '@reduxjs/toolkit';

import { loading, forceAuthLoading } from './auth-slice';
import { LoginFormI, ResetPasswordI, SignupFormI } from '@models/form/auth-form';
import UserApi from '@utils/api/user-api';
import LocalStorageHelper from '@utils/local-storage-helper';
import { LocalStorageKeys } from '@enums/local-storage-keys.enum';
import { AuthResponseI } from '@models/api/auth-response.interface';
import { StatusResponseI } from '@models/api/auth-status-response.type';
import { ConfirmPasswordPayloadI } from '@models/api/confirm-password-payload.interface';

const forceAuthAsync = createAsyncThunk<AuthResponseI>(
  'auth/forceAuthAsync',
  async (_, { dispatch }): Promise<AuthResponseI> => {
    dispatch(forceAuthLoading(true));

    try {
      const authResponse: AuthResponseI = await UserApi.forceAuth();
      LocalStorageHelper.setItem(LocalStorageKeys.Token, authResponse.accessToken);

      return authResponse;
    } catch (error) {
      LocalStorageHelper.removeItem(LocalStorageKeys.Token);
    }
  },
);

const forceLogout = createAsyncThunk<void>('auth/forceLogout', (): void => {
  LocalStorageHelper.removeItem(LocalStorageKeys.Token);

  return;
});

const loginAsync = createAsyncThunk<AuthResponseI, LoginFormI>(
  'auth/loginAsync',
  async (creadentials, { dispatch }): Promise<AuthResponseI> => {
    dispatch(loading(true));

    try {
      const authResponse: AuthResponseI = await UserApi.login(creadentials);
      console.log(authResponse);
      LocalStorageHelper.setItem(LocalStorageKeys.Token, authResponse.accessToken);
      return authResponse;
    } catch (error) {
      console.log(error);
    }
  },
);

const signupAsync = createAsyncThunk<AuthResponseI, SignupFormI>(
  'auth/signupAsync',
  async (creadentials, { dispatch }): Promise<AuthResponseI> => {
    dispatch(loading(true));

    try {
      const authResponse: AuthResponseI = await UserApi.signup(creadentials);
      console.log(authResponse);
      LocalStorageHelper.setItem(LocalStorageKeys.Token, authResponse.accessToken);
      return authResponse;
    } catch (error) {
      console.log(error);
    }
  },
);

const logoutAsync = createAsyncThunk<StatusResponseI>('auth/logout', async () => {
  try {
    const response: StatusResponseI = await UserApi.logout();
    console.log(response);
    LocalStorageHelper.removeItem(LocalStorageKeys.Token);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const resetPasswordAsync = createAsyncThunk<StatusResponseI, ResetPasswordI>(
  'auth/resetPassword',
  async (credentials, { dispatch }) => {
    dispatch(loading(true));

    try {
      const response: StatusResponseI = await UserApi.resetPassword(credentials);
      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
);

const resetPasswordConfirmAsync = createAsyncThunk<
  StatusResponseI,
  { navigateFn: () => void; credentials: ConfirmPasswordPayloadI }
>('auth/passwordConfirmAsync', async ({ navigateFn, credentials }, { dispatch }) => {
  dispatch(loading(true));

  try {
    const response: StatusResponseI = await UserApi.resetConfirmPassword(credentials);
    console.log(response);
    navigateFn();
    return response;
  } catch (error) {
    console.log(error);
  }
});

const AUTH_ACTIONS = {
  forceAuthAsync,
  forceLogout,
  loginAsync,
  signupAsync,
  logoutAsync,
  resetPasswordAsync,
  resetPasswordConfirmAsync,
};

export default AUTH_ACTIONS;
