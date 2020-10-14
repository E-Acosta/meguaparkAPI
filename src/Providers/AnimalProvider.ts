import { File } from "../Models/interfaces/IFile";
import { AnimalModel } from "../Models/schemas/Animal.schema";
import { AnimalImagesModel } from "../Models/schemas/AnimalImage.schema";
import { Animal, AnimalImage } from "../Models/structures/Animal.dto";
import { ServerResponse } from "../Models/structures/Responses";

export async function saveAnimal(animal: Animal, file: File) {
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
  export async  function getAnimalImages(animalId:string){
  console.log(`BUSCANDO ID:${animalId}`)
    return await AnimalImagesModel.find({animalId:animalId}).select('-_V -animalId').then((animalImages)=>{
      const animalImagesDocs=animalImages.map((animalImage)=>{
        const doc = new AnimalImage(animalImage)
        return doc
      })
      return animalImagesDocs
    }).catch(()=>{
      return []
    })
  }
  export async function getAnimals(){
    return await AnimalModel.find({}).select('-_V').then(async (animals)=>{
      const animalsDocs = animals.map((animal) => {
        const doc = new Animal(animal);
        return doc;
      })
      for (let i = 0; i < animalsDocs.length; i++) {
        const doc = animalsDocs[i];
        doc.images = await getAnimalImages(doc.id);
        
      }
      return new ServerResponse(200, "Success",animalsDocs);
    }).catch(()=>{
      return new ServerResponse(500, "ERROR GET ANIMALS")
    })
  }

  export async function saveAnimalImage(animalImage: AnimalImage, file: File) {
    if (file) {
      animalImage.imagePath = file.location;
      const animalImageModel= new AnimalImagesModel(animalImage);
    return await animalImageModel
      .save()
      .then(() => {
        return new ServerResponse(201, "New Animal Image Registered");
      })
      .catch((error) => {
        console.dir(error);
        return new ServerResponse(500,`${error}`);
      });
    }else{
      return new ServerResponse(400, "THE ANIMAL MUST BE HAVE AN IMAGE")
    }
  }
