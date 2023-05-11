import { AttachmentFileResponse } from "../response/AttachmentFileResponse";
import { ProductVersionResult } from "./ProductVersionResult";
import { ProductVersionSellOfflineResult } from "./ProductVersionSellOfflineResult";

export class SellResult{
    productId!: number;
    productVersionId!: number;
    quantity!: number;
    name!: string;
    price!: number;
    images!: number;
    brand!: string;
    image!:AttachmentFileResponse;
    warehouseId!: number;
    maxQuantity!: number;
    productVersions!: ProductVersionSellOfflineResult[];
}