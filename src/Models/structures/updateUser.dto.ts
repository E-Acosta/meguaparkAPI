import { IsString, IsOptional,/*IsDateString,*/ } from 'class-validator';
import {  IUserUpdate } from '../interfaces';
export class UpdateUser {
    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    lastname: string
    
    @IsOptional()
    @IsString()
    password: string

    @IsOptional()
    @IsString()
    passwordOld: string

    @IsOptional()
    image:string

    @IsOptional()
    birthdate:string

    @IsOptional()
    xp: number

    @IsOptional()
    level: number

    constructor (user:IUserUpdate){
        if(user){
            console.dir(user)
            this.name=user.name
            this.lastname=user.lastname
            this.birthdate=user.birthdate.toISOString()
            this.xp=user.xp
            this.level=user.level
            this.image=user.image
            this.password=user.password
            this.passwordOld=user.passwordOld
        }
    }
}