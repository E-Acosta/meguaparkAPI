import { Document} from 'mongoose';
export interface IUser extends Document {
  name: string;
  lastname: string;
  email: string;
  password: string;
  image:string;
  xp:number;
  level:number;
  birthdate:Date;
}
export interface IUserUpdate extends Document {
  name?: string;
  lastname?: string;
  password?: string;
  passwordOld?: string;
  image?:string;
  xp?:number;
  level?:number;
  birthdate?:Date;
}
export interface TokenDecode {
  userId: string
  iat: number
}