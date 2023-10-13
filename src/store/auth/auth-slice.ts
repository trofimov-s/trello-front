import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import AUTH_ACTIONS from './auth.actions';
import { UserI } from '@models/entities/user.interface';

export interface AuthState {
  isLoading: boolean;
  isAuth: boolean;
  isForceAuthLoading: boolean;
  token: string;
  user: UserI;
}

const initialState: AuthState = {
  isLoading: false,
  isAuth: false,
  isForceAuthLoading: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    forceAuthLoading(state, action: PayloadAction<boolean>) {
      state.isForceAuthLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(AUTH_ACTIONS.forceAuthAsync.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.user = payload.user;
      state.isForceAuthLoading = false;
    });
    builder.addCase(AUTH_ACTIONS.forceAuthAsync.rejected, (state, { payload }) => {
      state.isForceAuthLoading = false;
    });
    builder.addCase(AUTH_ACTIONS.loginAsync.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.isLoading = false;
      state.user = payload.user;
      console.log(current(state));
    });
    builder.addCase(AUTH_ACTIONS.loginAsync.rejected, (state, { payload }) => {
      // TODO
      state.isLoading = false;
    });
    builder.addCase(AUTH_ACTIONS.signupAsync.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.isLoading = false;
      state.user = payload.user;
      console.log(current(state));
    });
    builder.addCase(AUTH_ACTIONS.signupAsync.rejected, (state, { payload }) => {
      // TODO
    });
    builder.addCase(AUTH_ACTIONS.logoutAsync.fulfilled, (state, { payload }) => {
      state.isAuth = false;
    });
    builder.addCase(AUTH_ACTIONS.logoutAsync.rejected, (state, { payload }) => {
      // TODO
    });
    builder.addCase(AUTH_ACTIONS.forceLogout.fulfilled, (state) => {
      state.isAuth = false;
    });
    builder.addCase(AUTH_ACTIONS.resetPasswordAsync.fulfilled, (state) => {
      state.isLoading = false;
      // TODO
    });
    builder.addCase(AUTH_ACTIONS.resetPasswordAsync.rejected, (state) => {
      state.isLoading = false;
      // TODO
    });
    builder.addCase(AUTH_ACTIONS.resetPasswordConfirmAsync.fulfilled, (state) => {
      state.isLoading = false;
      // TODO
    });
    builder.addCase(AUTH_ACTIONS.resetPasswordConfirmAsync.rejected, (state) => {
      state.isLoading = false;
      // TODO
    });
  },
});

export const { loading, forceAuthLoading } = authSlice.actions;

export default authSlice;
