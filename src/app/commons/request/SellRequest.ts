import { SellResult } from "../result/SellResult";

export class SellRequest{
    id!: number;
    transactionMethod!: string;
    transferMethod!: string;
    transfer247!: boolean;
    money!: number;
    transactionStatus!: string;
    typeSell!: string;
    img!: number;
    transportCompanyId!: number;
    description!: string;
    sellProducts!: SellResult[];
    receivingAddress!: string;
    receivingPhone!: string;
    receivingName!: string;
}