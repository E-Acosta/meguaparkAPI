import mongoose from '../../Config/mongo'
import { IAnimal, IAnimalImage } from '../interfaces/IAnimal'
let {ObjectId} = mongoose.Schema.Types;
export const AnimalImageSchema = new mongoose.Schema<IAnimal>({
    animalId: {
        type: ObjectId,
        ref: "Animal",
        required: true,
    },
    imagePath: {
        type:String,
        trim:true
    },
})
export const AnimalImagesModel = mongoose.model<IAnimalImage>("AnimalImages", AnimalImageSchema);