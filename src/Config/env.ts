import * as dotenv from "dotenv";
dotenv.config();

export const configENV = {
    SECRET_TOKEN : process.env.SECRET_TOKEN,
    MONGOURI:process.env.MONGOURI,
    AWS_KEY_ID:process.env.AWS_KEY_ID,
    AWS_SECRET_KEY:process.env.AWS_SECRET_KEY,
    SENDGRID_API_KEY:process.env.SENDGRID_API_KEY
}