// imports
import * as dotenv from "dotenv";
import {app} from './Config'
import "reflect-metadata";
dotenv.config();
const {SERVER_PORT} = process.env
app.listen(SERVER_PORT, () => {
  console.log(`Iniciando servidor express en puerto ${SERVER_PORT}`);
});


