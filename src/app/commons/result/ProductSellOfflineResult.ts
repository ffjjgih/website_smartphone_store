import { AttachmentFileResponse } from "../response/AttachmentFileResponse";
import { ProductVersionSellOfflineResult } from "./ProductVersionSellOfflineResult";

export class ProductSellOfflineResult{
    productId!: number;
    productName!: string;
    image!: AttachmentFileResponse;
    brandId!: number;
    seriesId!: number;
    brandName!: string;
    warehouseId!: number;
    versionResults!: ProductVersionSellOfflineResult[];

}