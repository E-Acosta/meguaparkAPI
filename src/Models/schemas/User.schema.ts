import mongoose from "../../Config/mongo"
import {IUser} from '../interfaces'
export const UsersSchema = new mongoose.Schema<IUser>(
{
    name:{
        type:String,
        required:[true,'NAME_IS_REQUIRED'],
        trim:true
    },
    lastname:{
        type:String,
        trim:true
    },
    email:{
        type: String,
        required:[true,'EMAIL_IS_REQUIRED'],
        trim:true,
        unique:[true,'THIS EMAIL IS IN USE']
    },
    password:{
        type:String,
        required:[true,'PASSWORD_IS_REQUIRED'],
        trim:true
    },
    image:{
        type:String,
        default:'https://meguapark.s3.amazonaws.com/profileImages/default.png'
    },
    birthdate:{
        type:Date
    },
    xp:{
        type:Number,
        default:0
    },
    level:{
        type:Number,
        default:0
    }
}
)
export const UserModel = mongoose.model<IUser>("User", UsersSchema);