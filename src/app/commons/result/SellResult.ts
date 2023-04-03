import { ProductVersionResult } from "./ProductVersionResult";

export class SellResult{
    productId!: number;
    productVersionId!: number;
    quantity!: number;
    name!: string;
    price!: number;
    images!: string;
    brand!: string;
    productVersions!: ProductVersionResult[];
}