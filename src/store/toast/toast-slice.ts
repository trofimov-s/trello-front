import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Toast } from '@utils/toast';

interface ToastState {
  toasts: Toast[];
}

const initialState: ToastState = {
  toasts: [],
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast(state, { payload }: PayloadAction<Partial<Toast>>) {
      const toast = new Toast(payload.message, payload.type);
      state.toasts.unshift(toast);
    },
    removeToast(state, { payload }: PayloadAction<string>) {
      state.toasts = state.toasts.filter(({ id }) => id !== payload);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice;
