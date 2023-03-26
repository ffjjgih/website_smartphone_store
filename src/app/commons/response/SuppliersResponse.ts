import { Filter } from "../result/Filter";
import { SupplierResult } from "../result/SupplierResult";

export class SuppliersResponse {
    data!: SupplierResult[];
    filter!: Filter;
    message!: string;
    status!: number;
}