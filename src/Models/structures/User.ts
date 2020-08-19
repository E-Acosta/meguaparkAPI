import { IsString, IsOptional, IsEmail, IsNotEmpty, IsDateString } from 'class-validator';
export class User {
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

}