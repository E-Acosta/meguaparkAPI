
//imports
import {userProvider}  from '../Providers/UserProvider'
import express, { Request, Response } from 'express';
const {registerUser}= userProvider

//variables
const usersRouter = express.Router();
// Definicion de rutas
usersRouter.post('/createUser', async (req:Request, res:Response) => {
  await registerUser(req,res);
});


//Export Router
export {usersRouter};