import { Document } from "mongoose";

export interface IAnimal extends Document {
    name: string;
    nameEN: string;
    sciName: string;
    size: string;
    info:string;
    type:number;
    imagePath: string;
}
export interface IAnimalImage extends Document {
    animalId: string; //
    imagePath: string;
}