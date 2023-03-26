import { Filter } from "../result/Filter";
import { CategoryResult } from "../result/CategoryResult";

export class CategoriesResponse{
    message!:string;
    data!:CategoryResult[];
    filter!:Filter;
    status!:number;
}