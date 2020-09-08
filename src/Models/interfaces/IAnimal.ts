import { Document } from "mongoose";

export interface IAnimal extends Document {
    name: string;
    nameEN: string;
    sciName: string;
    size: number;
    info:string;
    type:number;
    imagePath: string;
}