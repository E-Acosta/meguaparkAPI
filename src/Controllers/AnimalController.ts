import { animalsProfileMulterConfig } from "../Config/multer";
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
import { login } from "../Providers/UserProvider";
import { ServerResponse } from "../Models/structures/Responses";
import { File } from "../Models/interfaces";
import { getAnimals, saveAnimal } from "../Providers/AnimalProvider";
import { Animal } from "../Models/structures/Animal.dto";
@JsonController("/animals")
export class AnimalController {
  @Post("")
  async createAnimal(
    @Body({ validate: true }) animal: Animal,
    @UploadedFile("image", { options: animalsProfileMulterConfig }) file:File
  ) {
    return saveAnimal(animal, file);
  }
  @Post("/login")
  login(@Body() body: { email: string; password: string }) {
    return login(body.email, body.password);
  }
  @Get("")
  getAnimals() {
    return getAnimals();
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
