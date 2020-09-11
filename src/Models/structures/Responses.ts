export class ServerResponse {
    code:Number
    data: BasicDataResponse|any
    message: String
    constructor (code:Number,message:String, data?:BasicDataResponse|any){
        this.code=code
        this.message=message
        this.data=data
    }

}
class BasicDataResponse {
    token?:String
}