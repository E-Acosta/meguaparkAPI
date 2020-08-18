//IMports
import {usersRouter} from '../src/Routers';
import * as bodyParser from "body-parser";
import {upload} from './Middlewares'
import express from 'express';
//variables
const app = express();

//Definicion de middlewares
app.use(bodyParser.urlencoded());
app.use(bodyParser.text())
app.use(bodyParser.json());
app.use(["/user/createUser"],upload.single('profileImage'))

//Definicion de controladores
app.use('/user',usersRouter)

export {app};