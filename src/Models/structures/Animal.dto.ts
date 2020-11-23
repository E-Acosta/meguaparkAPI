import { IsString, IsOptional, IsNotEmpty, IsMongoId, IsNumberString, } from 'class-validator';
import { IAnimal, IAnimalImage } from '../interfaces/IAnimal';
export class AnimalImage {
    @IsOptional()
    @IsMongoId()
    id:string

    @IsMongoId()
    animalId: string
    
    @IsOptional()
    @IsString()
    imagePath:string
    constructor(animalImage:IAnimalImage){
        if(animalImage){
        // this.id=animalImage._id.toString()
        this.imagePath=animalImage.imagePath
        }
    }
}
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

    @IsOptional()
    modelPath:string

    @IsString()
    @IsNotEmpty()
    size: string

    // 1: bird, 2: Mamiferos, 3:Herpetos
    @IsNumberString()
    @IsNotEmpty()
    type: number

    @IsOptional()
    images:AnimalImage[]|[]

    constructor (animal:IAnimal){
        if(animal){
            this.id=animal._id.toString()
            this.name=animal.name
            this.nameEN=animal.nameEN
            this.sciName=animal.sciName
            this.size=animal.size
            this.type=animal.type
            this.imagePath=animal.imagePath
            this.modelPath=animal.modelPath
            this.info=animal.info
            this.images=[]
            console.dir(this)
        }
    }
}
