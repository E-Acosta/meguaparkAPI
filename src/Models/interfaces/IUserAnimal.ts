import { Document } from "mongoose";

export interface IUserAnimal extends Document {
    userId: string;
    animalId: string; //
    method: string;
    key:string
}