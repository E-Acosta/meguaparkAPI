import { Document} from 'mongoose';
export interface IUser extends Document {
  name: string;
  lastname: string;
  email: string;
  password: string;
  image:string;
  xp:string;
  level:string;
  birthdate:Date;
}
export interface TokenDecode {
  userId: string
  iat: number
}