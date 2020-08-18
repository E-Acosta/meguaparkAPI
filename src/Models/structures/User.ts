import { IsString, IsOptional, IsEmail, IsNotEmpty, IsBase64, IsDateString } from 'class-validator';
import {IUser} from '../interfaces';
export class UserStructure {
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
    
    constructor(data:IUser){
        this.email=data.email
        this.lastname=data.lastname
        this.name=data.name
        this.password=data.password
        this.image=data.image
        this.birthdate=data.birthdate
    }

}