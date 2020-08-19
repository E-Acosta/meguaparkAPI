import * as AWS from 'aws-sdk'
export const S3 = new AWS.S3({
    accessKeyId:process.env.AWS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_KEY,
    apiVersion: '2006-03-01'})
