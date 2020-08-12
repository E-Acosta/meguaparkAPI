import { APIGatewayProxyHandler } from 'aws-lambda';
import serverless from 'serverless-http';
import {app} from './config/express';
export const hello: APIGatewayProxyHandler = serverless(app);