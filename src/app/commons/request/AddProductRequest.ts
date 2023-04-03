import { ProductConfigDetail } from "../result/productConfigDetail";
import { ProductVersion } from "../result/productVersion";

export class AddProductRequest{
    name!: string;
    description!: string;
    categoryId!: number;
    supplierId!: number;
    quantity!: number;
    status!: string;
    brandId!: number;
    isSupplier!: boolean;
    seriesId!: number;
    images!: number[];
    img!: number;
    midia!: number;
    barcode!: string;
    versions!: ProductVersion[];
    detail!: ProductConfigDetail;
}