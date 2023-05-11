import { BillResult } from "../result/BillResult";

export class BillResponse{
    billStatus!:string;
    status!:number;
    message!:string;
    data!:BillResult[];
}