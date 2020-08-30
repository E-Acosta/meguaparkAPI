export class ServerResponse {
    error:Boolean
    data: BasicDataResponse|any
    constructor (error:Boolean, data:BasicDataResponse|any){
        this.error=error
        this.data=data
    }
}
class BasicDataResponse {
    message?:String
    token?:String
}