import { ProductSellOfflineResult } from "../result/ProductSellOfflineResult";

export class ProdcutSellOfflineResponse{
    status!: number;
    message!: string;
    data!: ProductSellOfflineResult[];
}