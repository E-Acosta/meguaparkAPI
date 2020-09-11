import mongoose from '../../Config/mongo'
import { IAnimal } from '../interfaces/IAnimal'
export const AnimalSchema = new mongoose.Schema<IAnimal>({
    name: {
        type:String,
        required:[true,'NAME_IS_REQUIRED'],
        trim:true
    },
    nameEN: {
        type:String,
        required:[true,'NAME_IN_ENGLISH_IS_REQUIRED'],
        trim:true
    },
    sciName: {
        type:String,
        required:[true,'SCIENCE_NAME_IS_REQUIRED'],
        trim:true
    },
    size: {
        type:String,
        trim:true
    },
    info:{
        type:String,
        trim:true
    },
    type:{
        type:Number,
        trim:true
    },
    imagePath: {
        type:String,
        trim:true
    },
})
export const AnimalModel = mongoose.model<IAnimal>("Animal", AnimalSchema);