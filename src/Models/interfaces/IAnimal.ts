import { Document } from "mongoose";
import { AnimalImage } from "../structures/Animal.dto";

export interface IAnimal extends Document {
    name: string;
    nameEN: string;
    sciName: string;
    size: string;
    info:string;
    type:number;
    imagePath: string;
    modelPath: string;
    images:AnimalImage[]|[];
}
export interface IAnimalImage extends Document {
    animalId: string; //
    imagePath: string;
}