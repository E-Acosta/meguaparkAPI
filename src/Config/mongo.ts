import * as mongoose from "mongoose";
import { configENV } from "./env";
const {MONGOURI} = configENV
mongoose.connect(`${MONGOURI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongo Db Conectado");
});
mongoose.connection.on("error", (err) => {
  console.log(MONGOURI)
  console.log("Error con Mongoose");
  console.log(err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Se ha perdido la conexion con mongo");
});
export default mongoose;
