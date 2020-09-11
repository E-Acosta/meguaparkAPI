import { IsMongoId, IsOptional, IsString } from "class-validator"
import { User } from "./User.dto"

export class UserAnimallink {
    @IsOptional()
    @IsMongoId()
    userId: string

    @IsMongoId()
    animalId: string
    
    @IsString()
    method:string

    @IsOptional()
    @IsString()
    key:string

    constructor(user:User,UserAnimallink:UserAnimallink){
        if(UserAnimallink){
        // this.id=animalImage._id.toString()
        this.userId=user.id
        this.method=UserAnimallink.method
        this.animalId=UserAnimallink.animalId
        this.key=`${user.id}-${UserAnimallink.animalId}`
        }
    }
}