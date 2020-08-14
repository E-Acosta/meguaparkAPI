import * as mongoose from "mongoose";
const { MONGO_URI } = process.env;
mongoose.connect(`${MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
export default mongoose;