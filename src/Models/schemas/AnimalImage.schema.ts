import mongoose from '../../Config/mongo'
import { IAnimal } from '../interfaces/IAnimal'
let {ObjectId} = mongoose.Schema.Types;
export const AnimalSchema = new mongoose.Schema<IAnimal>({
    bird: {
        type: ObjectId,
        ref: "Animal",
        required: true,
    },
    imagePath: {
        type:String,
        trim:true
    },
})
export const AnimalModel = mongoose.model<IAnimal>("Animal", AnimalSchema);