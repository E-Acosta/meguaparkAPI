import { Request, Response } from 'express';
import { PetModel } from '../Models';
export async function itsme (req:Request,res:Response){
    console.log(process.env.HOLI)
    res.json({
        error:false,
        data: await PetModel.find({})
    })
}
