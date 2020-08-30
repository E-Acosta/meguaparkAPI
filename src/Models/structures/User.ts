import { IsString, IsOptional, IsEmail, IsNotEmpty, IsDateString, IsMongoId } from 'class-validator';
import { IUser } from '../interfaces';
export class User {
    @IsMongoId()
    @IsOptional()
    id: string
    
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    lastname: string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string
    
    @IsNotEmpty()
    @IsString()
    password: string

    @IsOptional()
    image:string

    @IsDateString()
    @IsNotEmpty()
    birthdate:string

    @IsOptional()
    xp: number

    @IsOptional()
    level: number

    constructor (user:IUser){
        if(user){
            console.dir(user)
            this.id=user._id.toString()
            this.name=user.name
            this.lastname=user.lastname
            this.email=user.email
            this.birthdate=user.birthdate.toISOString()
            this.xp=user.xp
            this.level=user.level
            this.image=user.image
        }
    }
}