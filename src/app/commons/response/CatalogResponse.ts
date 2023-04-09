import { BrandCatalogResult } from "../result/BrandCatalogResult";
import { CategoryCatalogResult } from "../result/CategoryCatalogResult";
import { SeriesResult } from "../result/SeriesResult";
import { SupplierCatalogResult } from "../result/SupplierCatalogResult";

export class CatalogResponse{
    brands!: BrandCatalogResult[];
    categories!: CategoryCatalogResult[];
    suppliers!: SupplierCatalogResult[];
    series!: SeriesResult[];
}