import mongoose from '../../Config/mongo'
import { IAnimal } from '../interfaces/IAnimal'
import { IUserAnimal } from '../interfaces/IUserAnimal';
let {ObjectId} = mongoose.Schema.Types;
export const UserAnimalsSchema = new mongoose.Schema<IAnimal>({
    userId: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    animalId: {
        type: ObjectId,
        ref: "Animal",
        required: true,
    },
    method: {
        type:String,
        trim:true
    },
    key:{
        type:String,
        trim:true,
        unique:[true,'THIS ANIMAL IS ALREADY LINKED']
    }
})
export const UserAnimalsModel = mongoose.model<IUserAnimal>("UserAnimals", UserAnimalsSchema);