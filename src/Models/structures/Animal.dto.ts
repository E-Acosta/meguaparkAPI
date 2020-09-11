import { IsString, IsOptional, IsNotEmpty, IsMongoId, IsNumberString, } from 'class-validator';
import { IAnimal } from '../interfaces/IAnimal';
export class Animal {
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

    @IsString()
    @IsNotEmpty()
    size: string

    // 1: bird, 2: Mamiferos, 3:Herpetos
    @IsNumberString()
    @IsNotEmpty()
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