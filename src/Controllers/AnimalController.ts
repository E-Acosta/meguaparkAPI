import { animalsModelMulterConfig, animalsProfileMulterConfig } from "../Config/multer";
import {
  Body,
  Post,
  UploadedFile,
  JsonController,
  Get,
  Put, Authorized, CurrentUser, Param, Delete
} from "routing-controllers";
import { login } from "../Providers/UserProvider";
import { File } from "../Models/interfaces";
import { add3dModel, deleteAnimal, getAnimals, getAnimalsLinked, linkAnimalToUser, saveAnimal, saveAnimalImage, updateAnimal } from "../Providers/AnimalProvider";
import { Animal, AnimalImage } from "../Models/structures/Animal.dto";
import { User } from "../Models/structures";
import { ServerResponse } from "../Models/structures/Responses";
import { UserAnimallink } from "../Models/structures/UserAnimal.dto";
@JsonController("/animals")
export class AnimalController {
  @Post("")
  async createAnimal(
    @Body({ validate: true }) animal: Animal,
    @UploadedFile("image", { options: animalsProfileMulterConfig }) file: File
  ) {
    return saveAnimal(animal, file);
  }
  @Put("/:id")
  async updateAnimal(
    @Body({ validate: false }) animal: Animal,
    @UploadedFile("image", { options: animalsProfileMulterConfig }) file: File,
    @Param("id") id: string
  ) {
    return updateAnimal(animal, file, id);
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
    @UploadedFile("image", { options: animalsProfileMulterConfig }) file: File
  ) {
    return saveAnimalImage(animalImage, file);
  }
  @Post("/link")
  @Authorized()
  async LinkAnimal(@Body({ validate: true }) userAnimallink: UserAnimallink, @CurrentUser() user?: User) {
    if (user) {
      console.log(userAnimallink)
      const link = new UserAnimallink(user, userAnimallink)
      return await linkAnimalToUser(link)
    } else {
      return new ServerResponse(400, "USER NOT EXITS");
    }
  }
  @Get("/me")
  @Authorized()
  AnimalsMe(@CurrentUser() user?: User) {
    if (user) {
      return getAnimalsLinked(user)
    } else {
      return new ServerResponse(400, "USER NOT EXITS");
    }
  }
  @Put("/3d/:id")
  add3d(
    @Param("id") id: string,
    @UploadedFile("model", { options: animalsModelMulterConfig }) file: File
  ) {
    return add3dModel(id, file)
  }
  @Delete("/:id")
  async deleteAnimal(@Param("id") id: string){
    try {
      await deleteAnimal(id)
      return new ServerResponse(200,"Animal Eliminado")
    } catch (error) {
      console.log(error)
      return new ServerResponse(400,"ANIMAL NOT EXITS");
    }
  }
}
