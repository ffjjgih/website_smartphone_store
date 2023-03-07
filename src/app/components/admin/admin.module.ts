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
    DetailCategoryComponent
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
