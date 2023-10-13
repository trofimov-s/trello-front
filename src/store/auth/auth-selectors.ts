import { RootState } from '../index';
import { AuthState } from './auth-slice';

const selectAuthState = (state: RootState): AuthState => state.auth;

export const AUTH_SELECTORS = { selectAuthState };
