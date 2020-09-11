import * as AWS from 'aws-sdk'
import { configENV } from './env'
export const S3 = new AWS.S3({
    accessKeyId:configENV.AWS_KEY_ID,
    secretAccessKey:configENV.AWS_SECRET_KEY,
    apiVersion: '2006-03-01'})
