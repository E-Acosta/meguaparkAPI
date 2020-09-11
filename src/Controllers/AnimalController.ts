import { animalsProfileMulterConfig } from "../Config/multer";
import {
  Body,
  Post,
  UploadedFile,
  JsonController,
  Get,
  Put,
} from "routing-controllers";
import { login } from "../Providers/UserProvider";
import { File } from "../Models/interfaces";
import { getAnimals, saveAnimal, saveAnimalImage } from "../Providers/AnimalProvider";
import { Animal, AnimalImage } from "../Models/structures/Animal.dto";
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
  async addImageAnimal(
    @Body({ validate: true }) animalImage: AnimalImage,
    @UploadedFile("image", { options: animalsProfileMulterConfig }) file:File
  ) {
    return saveAnimalImage(animalImage, file);
  }
}
