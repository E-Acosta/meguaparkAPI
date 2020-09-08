import { IsString, IsOptional, IsNotEmpty, /*IsDateString,*/ IsMongoId, IsNumber } from 'class-validator';
import { IAnimal } from '../interfaces/IAnimal';
export class Animal {
    /*
    name: string;
    nameEN: string;
    sciName: string;
    tamaño: number;
    info:string;
    type:number;
    imagePath: string;
    */
    @IsMongoId()
    @IsOptional()
    id: string
    
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    nameEN: string

    @IsNotEmpty()
    @IsString()
    sciName: string
    
    @IsOptional()
    @IsString()
    info: string

    @IsOptional()
    imagePath:string

    @IsNumber()
    @IsOptional()
    size: number

    @IsNumber()
    @IsOptional()
    type: number

    constructor (animal:IAnimal){
        if(animal){
            console.dir(animal)
            this.id=animal._id.toString()
            this.name=animal.name
            this.nameEN=animal.nameEN
            this.sciName=animal.sciName
            this.size=animal.size
            this.type=animal.type
            this.imagePath=animal.imagePath
            this.info=animal.info
        }
    }
}