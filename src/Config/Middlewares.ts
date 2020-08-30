import { verify } from "jsonwebtoken";
import { Action } from "routing-controllers";
import { TokenDecode } from "../Models/interfaces";
import { getUserInfo } from "../Providers/UserProvider";
import { configENV } from "./env";

export const isAuthorized = async (action: Action, roles: string[]) => {
  let authorization: string = action.request.headers["authorization"];
  if (authorization) {
    const token = authorization.split(' ')[1];
    console.log(token)
    try {
      verify(token, configENV.SECRET_TOKEN);
      console.log("FUNCIONO")
      return true;
    } catch (error) {
      console.log("EL ERRORE")
        console.log(token)
        console.log(configENV.SECRET_TOKEN)
        console.log(error)
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