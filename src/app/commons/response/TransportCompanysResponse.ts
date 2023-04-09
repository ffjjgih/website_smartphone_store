import { Filter } from "../result/Filter";
import { TransportCompanyResult } from "../result/TransportCompanyResult";

export class TransportCompanyResponse{
    status!: number;
    message!: string;
    data!: TransportCompanyResult[];
    filter!: Filter;
}