import { ProductVersionResult } from "./ProductVersionResult";

export class ProductResult{
    id!: number;
    name!: string;
    price!: number;
    description!: string;
    images!: string;
    brand!: string;
    category!: string;
    supplier!: string;
    imagesId!: number[];
    productVersions!: ProductVersionResult[];
}