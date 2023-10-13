import { UserI } from "@models/entities/user.interface";

export interface AuthResponseI {
  accessToken: string;
  user: UserI
}
