import { File } from "../Models/interfaces/IFile";
import { UserModel } from "../Models/schemas";
import { AnimalModel } from "../Models/schemas/Animal.schema";
import { AnimalImagesModel } from "../Models/schemas/AnimalImage.schema";
import { UserAnimalsModel } from "../Models/schemas/UserAnimals.schema";
import { User } from "../Models/structures";
import { Animal, AnimalImage } from "../Models/structures/Animal.dto";
import { ServerResponse } from "../Models/structures/Responses";
import { UserAnimallink } from "../Models/structures/UserAnimal.dto";

export async function saveAnimal(animal: Animal, file: File) {
  if (file) {
    animal.imagePath = file.location;
    const animalModel = new AnimalModel(animal);
    return await animalModel
      .save()
      .then(() => {
        return new ServerResponse(201, "Animal Registered");
      })
      .catch((error) => {
        console.dir(error);
        return new ServerResponse(500, `${error}`);
      });
  } else {
    return new ServerResponse(400, "THE ANIMAL MUST BE HAVE AN IMAGE")
  }
}
export async function updateAnimal(animal: Animal, file: File, id: string) {
  let animalDoc = await AnimalModel.findOne({ _id: id })
  animalDoc.name = animal.name ? animal.name : animalDoc.name
  animalDoc.nameEN = animal.nameEN ? animal.nameEN : animalDoc.nameEN
  animalDoc.sciName = animal.sciName ? animal.sciName : animalDoc.sciName
  animalDoc.size = animal.size ? animal.size : animalDoc.size
  animalDoc.info = animal.info ? animal.info : animalDoc.info
  animalDoc.imagePath = file ? file.location : animalDoc.imagePath;
  return await animalDoc
    .save()
    .then(() => {
      return new ServerResponse(201, "Animal updated");
    })
    .catch((error) => {
      console.dir(error);
      return new ServerResponse(500, `${error}`);
    });
}
export async function add3dModel(id: string, file: File) {
  let animalDoc = await AnimalModel.findOne({ _id: id });
  if (file) {
    animalDoc.modelPath = file.location
    console.dir(file)
    console.log("---------------")
    console.dir(animalDoc)
  }
  try {
    await animalDoc.save();
    return new ServerResponse(200, "Sucess", {
      message: "Model Added successfully",
    });
  } catch (error) {
    console.log(error);
    return new ServerResponse(500, "ERROR :C");
  }
}
export async function getAnimalImages(animalId: string) {
  console.log(`BUSCANDO ID:${animalId}`)
  return await AnimalImagesModel.find({ animalId: animalId }).select('-_V -animalId').then((animalImages) => {
    const animalImagesDocs = animalImages.map((animalImage) => {
      const doc = new AnimalImage(animalImage)
      return doc
    })
    return animalImagesDocs
  }).catch(() => {
    return []
  })
}
export async function getAnimals() {
  return await AnimalModel.find({}).select('-_V').then(async (animals) => {
    const animalsDocs = animals.map((animal) => {
      const doc = new Animal(animal);
      return doc;
    })
    for (let i = 0; i < animalsDocs.length; i++) {
      const doc = animalsDocs[i];
      doc.images = await getAnimalImages(doc.id);

    }
    return new ServerResponse(200, "Success", animalsDocs);
  }).catch(() => {
    return new ServerResponse(500, "ERROR GET ANIMALS")
  })
}

export async function saveAnimalImage(animalImage: AnimalImage, file: File) {
  if (file) {
    animalImage.imagePath = file.location;
    const animalImageModel = new AnimalImagesModel(animalImage);
    return await animalImageModel
      .save()
      .then(() => {
        return new ServerResponse(201, "New Animal Image Registered");
      })
      .catch((error) => {
        console.dir(error);
        return new ServerResponse(500, `${error}`);
      });
  } else {
    return new ServerResponse(400, "THE ANIMAL MUST BE HAVE AN IMAGE")
  }
}
export async function linkAnimalToUser(link: UserAnimallink) {
  const userAnimalModel = new UserAnimalsModel(link);
  const linkExist = await UserAnimalsModel.findOne({ key: link.key })
  if (!linkExist) {
    let userDoc = await UserModel.findOne({ _id: link.userId });
    userDoc.xp+=40;
    userDoc.level=Math.trunc(userDoc.xp/100);
    await userDoc.save().then();
    return await userAnimalModel.save().then(() => {
      return new ServerResponse(200, "New Animal find successfully");
    }).catch((error) => {
      return new ServerResponse(500, `${error}`);
    })
  } else {
    return new ServerResponse(406, `THIS ANIMAL IS ALREADY LINKED`);
  }
}
export async function getAnimalsLinked(user: User) {
  const animalsIds = await UserAnimalsModel.find({ userId: user.id }).select('animalId').lean().then((animals) => {
    return animals.map((animal) => {
      return animal.animalId.toString()
    })
  })
  const animalsNotFounds = await AnimalModel.find({}).where('_id').nin(animalsIds).then(async (animals) => {
    const animalsDocs = animals.map((animal) => {
      return new Animal(animal)
    })
    for (let i = 0; i < animalsDocs.length; i++) {
      const doc = animalsDocs[i];
      doc.images = await getAnimalImages(doc.id);
    }
    return animalsDocs
  })
  console.log('NO ENCONTRADOS')
  console.dir(animalsNotFounds)
  const animalsFounds = await AnimalModel.find({}).where('_id').in(animalsIds).then(async (animals) => {
    const animalsDocs = animals.map((animal) => {
      return new Animal(animal)
    })
    for (let i = 0; i < animalsDocs.length; i++) {
      const doc = animalsDocs[i];
      doc.images = await getAnimalImages(doc.id);
    }
    return animalsDocs
  })
  console.log('ENCONTRADOS')
  console.dir(animalsFounds)
  return new ServerResponse(200, "Success", { founds: animalsFounds, notFoundsYet: animalsNotFounds, total: animalsFounds.length + animalsNotFounds.length });
}

export async function deleteAnimal(id: string) {
  return await AnimalModel.findByIdAndDelete(id)
}