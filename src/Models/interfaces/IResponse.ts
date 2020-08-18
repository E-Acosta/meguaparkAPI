export class ResponseStructure {
    error:Boolean
    data:IData
    dataError:IDataError
    constructor (error:Boolean,data?:IData,dataError?:IDataError){
        this.error=error,
        this.data=data
        this.dataError=dataError
    }
}
export interface IData{
    Message?:string
}
export interface IDataError{
    code:Number,
    Message:string
}