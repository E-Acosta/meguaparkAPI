import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { UserController } from "../Controllers";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [UserController]
   
});

// run express application on port 3000
export {app}