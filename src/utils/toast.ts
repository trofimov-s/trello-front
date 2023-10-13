import { ToastTypeI } from '@models/entities/toast.interface';
import { nanoid } from '@reduxjs/toolkit';

export class Toast {
  public id: string;

  constructor(
    public message: string,
    public type: ToastTypeI,
  ) {
    this.id = nanoid(20);
  }
}
