import * as bodyParser from "body-parser";
import express from 'express';
import {usersRouter} from '../src/Routers';
const app = express();

//Definicion de middleware
app.use(bodyParser.json());

//Definicion de controladores
app.use('/user',usersRouter)

export {app};