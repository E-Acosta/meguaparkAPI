import { compareSync, hashSync } from "bcrypt";
import { parseDate } from "../Config/mixin";
import { File, IUser } from "../Models/interfaces";
import { UserModel } from "../Models/schemas";
import { User } from "../Models/structures";
import { ServerResponse } from "../Models/structures/Responses";
import { sign } from "jsonwebtoken";
import { configENV } from "../Config/env";
const hashSalt: number = 10;

export async function saveUser(user: User, file: File) {
  user = {
    ...user,
    ...{
      image: undefined,
      password: hashSync(user.password, hashSalt),
      birthdate: parseDate(user.birthdate),
    },
  };
  if (file) {
    user.image = file.location;
  }
  console.dir(user)
  const userModel = new UserModel(user);
  return await userModel
    .save()
    .then(() => {
      return new ServerResponse(201, "User Registered");
    })
    .catch((error) => {
      console.dir(error.message);
      if (error.message.includes("email_1 dup key")) {
        return new ServerResponse(406, `EMAIL EXITS`);
      } else {
        return new ServerResponse(500, `${error}`);
      }
    });
}
export async function login(username: string, password: string) {
  const user: IUser = await UserModel.findOne({ email: username });
  if (user) {
    if (compareSync(password, user.password)) {
      return new ServerResponse(200, "User acepted", {
        token: sign({ userId: user._id }, configENV.SECRET_TOKEN),
      });
    } else {
      return new ServerResponse(400, "INCORRECT PASSWORD");
    }
  } else {
    return new ServerResponse(400, "EMAIL NOT REGISTERED");
  }
}
export async function getUserInfo(id: String) {
  const userDoc: IUser = await UserModel.findOne({ _id: id }).select(
    "-password -_V"
  );
  const user = new User(userDoc);
  return user;
}
