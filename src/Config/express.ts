import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { UserController } from "../Controllers";
import { getUser, isAuthorized } from "./Middlewares";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [UserController],
   authorizationChecker: isAuthorized,
   currentUserChecker: getUser
});

// run express application on port 3000
export {app}