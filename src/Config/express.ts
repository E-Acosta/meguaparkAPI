import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { UserController } from "../Controllers";
import { AnimalController } from "../Controllers/AnimalController";
import { getUser, isAuthorized } from "./Middlewares";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [UserController,AnimalController],
   authorizationChecker: isAuthorized,
   currentUserChecker: getUser,
   cors:{origin: '*'}
});

// run express application on port 3000
export {app}