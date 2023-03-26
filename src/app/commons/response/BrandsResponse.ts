import { Filter } from "../result/Filter";
import { BrandResult } from "../result/BrandResult";

export class BrandResponse{
    data!: BrandResult[];
    message!: string;
    status!: number;
    filter!: Filter;
}