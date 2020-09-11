import { AnimalModel } from "../Models/schemas/Animal.schema";
import { Animal } from "../Models/structures/Animal.dto";
import { ServerResponse } from "../Models/structures/Responses";

export async function saveAnimal(animal: Animal, file: any) {
    if (file) {
      animal.imagePath = file.location;
      const animalModel= new AnimalModel(animal);
    return await animalModel
      .save()
      .then(() => {
        return new ServerResponse(201, "Animal Registered");
      })
      .catch((error) => {
        console.dir(error);
        return new ServerResponse(500,`${error}`);
      });
    }else{
      return new ServerResponse(400, "THE ANIMAL MUST BE HAVE AN IMAGE")
    }
  }

  export async function getAnimals(){
    return await AnimalModel.find({}).select('-_V').then((animals)=>{
      const animalsDocs = animals.map((animal)=>{
        const doc = new Animal(animal)
        return doc
      })
      return new ServerResponse(200, "Success",animalsDocs);
    }).catch(()=>{
      return new ServerResponse(500, "ERROR GET ANIMALS")
    })
  }