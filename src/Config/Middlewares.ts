import { verify } from "jsonwebtoken";
import { Action } from "routing-controllers";
import { TokenDecode } from "../Models/interfaces";
import { getUserInfo } from "../Providers/UserProvider";
import { configENV } from "./env";

export const isAuthorized = async (action: Action, roles: string[]) => {
  let authorization: string = action.request.headers["authorization"];
  if (authorization) {
    const token = authorization.split(' ')[1];
    try {
      verify(token, configENV.SECRET_TOKEN);
      return true;
    } catch (error) {
      return false;
    }
  }else{
      return false;
  }
};
export const getUser = async (action:Action)=>{
  const token = action.request.headers["authorization"].split(' ')[1];
  const {userId} = verify(token, configENV.SECRET_TOKEN) as TokenDecode;
  return getUserInfo(userId)
}