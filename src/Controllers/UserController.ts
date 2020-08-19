import { fileUploadOptions } from "../Config/multer";
import { User } from "../Models/Structures/User";
import { hashSync } from "bcrypt";
import {
  Param,
  Body,
  Post,
  Put,
  Delete,
  UploadedFile,
  JsonController,
} from "routing-controllers";
import { UserModel } from "../Models/Schemas";
import { saveUser } from "../Providers/mongo";
const hashSalt: number = 10;
function parseDate(birthdate:string){
  const date = new Date(birthdate);
  return `${date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()}`;
}
@JsonController("/users")
export class UserController {
  @Post("")
  async createUser(
    @Body({ validate: true }) user: User,
    @UploadedFile("profileImage", { options: fileUploadOptions }) file: any
  ) {
    console.dir(user);
    console.dir(file);
    user = {
      ...user,
      ...{ image: file.location, password: hashSync(user.password, hashSalt),birthdate:parseDate(user.birthdate) },
    };
    const userModel = new UserModel(user);
    return saveUser(userModel)
  }

  @Put("/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
