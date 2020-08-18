// import {mongoose} from '../../../../config'
import mongoose from "../../../config/mongoose"
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
        default:''
    },
    bithDate:{
        type:Date
    }
}
)
export const UserModel = mongoose.model<IUser>("User", UsersSchema);