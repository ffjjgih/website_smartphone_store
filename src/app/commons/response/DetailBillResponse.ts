import { DetailBillResult } from "../result/DetailBillResult";
import { DetailOrderResult } from "../result/DetailOrderResult";

export class DetailBillResponse {
    billId!: number;
    orderId!: number;
    fullName!: string;
    address!: string;
    numberPhone!: string;
    price!: number;
    createdDate!: string;
    shipperName!: string;
    shipperPhone!: string;
    completedDate!: string;
    receivingMethod!: string;
    transferMethod!: string;
    sendAddress!: string;
    receiveAddress!: string;
    receiveCompany!: string;
    detailOrders!: DetailOrderResult[];
    detailBills!: DetailBillResult[];

}