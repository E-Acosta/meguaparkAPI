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
  Put,
} from "routing-controllers";
import { login, saveUser } from "../Providers/UserProvider";
import { ServerResponse } from "../Models/structures/Responses";
@JsonController("/animals")
export class AnimalController {
  @Post("")
  async createUser(
    @Body({ validate: true }) user: User,
    @UploadedFile("profileImage", { options: usersProfileMulterConfig }) file: any
  ) {
    return saveUser(user, file);
  }
  @Post("/login")
  login(@Body() body: { email: string; password: string }) {
    return login(body.email, body.password);
  }
  @Get("/me")
  @Authorized()
  userMe(@CurrentUser() user?:User) {
    if (user) {
      return new ServerResponse(200,"Sucess", user);
    } else {
      return new ServerResponse(400, "USER NOT EXITS");
    }
  }
  @Put("")
  @Authorized()
  updateUser(@CurrentUser() user?:User){
    if (user) {
      return new ServerResponse(200,"Sucess", user);
    } else {
      return new ServerResponse(400, "USER NOT EXITS");
    }
  }
}
