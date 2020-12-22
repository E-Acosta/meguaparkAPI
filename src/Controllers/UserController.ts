import { usersProfileMulterConfig } from "../Config/multer";
import { User } from "../Models/structures/User.dto";
import {
  Body,
  Post,
  UploadedFile,
  JsonController,
  Get,
  Authorized,
  CurrentUser,
  Put
} from "routing-controllers";
import { login, saveUser, updateUserInfo } from "../Providers/UserProvider";
import { ServerResponse } from "../Models/structures/Responses";
import { File } from "../Models/interfaces";
import { UpdateUser } from "../Models/structures/updateUser.dto"
import * as sgMail from "@sendgrid/mail"
import { configENV } from "../Config/env";
sgMail.setApiKey(configENV.SENDGRID_API_KEY)

@JsonController("/users")
export class UserController {
  @Post("")
  async createUser(
    @Body({ validate: true }) user: User,
    @UploadedFile("profileImage", { options: usersProfileMulterConfig })
    file: File
  ) {
    return saveUser(user, file);
  }
  @Post("/login")
  login(@Body() body: { email: string; password: string }) {
    return login(body.email, body.password);
  }
  @Get("/me")
  @Authorized()
  userMe(@CurrentUser() user?: User) {
    if (user) {
      return new ServerResponse(200, "Sucess", user);
    } else {
      return new ServerResponse(400, "USER NOT EXITS");
    }
  }
  @Put("")
  @Authorized()
  async updateUser(@CurrentUser() user?: User,
    @Body({ validate: true }) userNewInfo?: UpdateUser,
    @UploadedFile("profileImage", { options: usersProfileMulterConfig })
    file?: File
  ) {
    return updateUserInfo(user.id, userNewInfo,file);
  }
  @Post("/recovery")
  async recovery(@Body() body:any){
    const msg={
      from:"me@everacosta.com",
      to:"everluis935@gmail.com",
      subject:"Password recovery",
      text:"email send with node",
      html:"<h1>recovery password</h1>"
    }
    await sgMail.send(msg)
    return new ServerResponse(200,"email sended successfully")
  }
}
