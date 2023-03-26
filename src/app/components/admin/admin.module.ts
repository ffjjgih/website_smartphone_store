import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {AdminComponent} from "./admin.component";
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import { AddCategoryComponent } from './category/add-category/add-category.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component';
import { CategoryComponent } from './category/category/category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { BrandComponent } from './brand/brand.component';
import { ViewBrandComponent } from './brand/view-brand/view-brand.component';
import { AddBrandComponent } from './brand/add-brand/add-brand.component';
import { EditBrandComponent } from './brand/edit-brand/edit-brand.component';
import { DetailBrandComponent } from './brand/detail-brand/detail-brand.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ViewSupplierComponent } from './supplier/view-supplier/view-supplier.component';
import { DetailSupplierComponent } from './supplier/detail-supplier/detail-supplier.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './supplier/edit-supplier/edit-supplier.component';
import { ProductComponent } from './product/product/product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    AddCategoryComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    ViewCategoryComponent,
    CategoryComponent,
    EditCategoryComponent,
    DetailCategoryComponent,
    BrandComponent,
    ViewBrandComponent,
    AddBrandComponent,
    EditBrandComponent,
    DetailBrandComponent,
    SupplierComponent,
    ViewSupplierComponent,
    DetailSupplierComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    ProductComponent,
    CreateProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule {
}
