import { Request, Response } from 'express';
export function itsme (req:Request,res:Response){
    res.json({message: 'its me mario'});
}
