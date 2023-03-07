import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    {provide:ROUTES,
      useFactory: configHomeRoutes,
      deps: [AuthService],
      multi: true}
  ]
})
export class HomeModule { }

export function configHomeRoutes(authService: AuthService){
  let routes: Routes = [];
  if (!authService.isAuthorized()) {
    routes = [
      {
        path: '',
        loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule)
      }
    ];
  } else {
    routes = [
      {
        path: '',
        loadChildren: () => import('../customer/customer.module').then((m) => m.CustomerModule)
      }
    ];
  }
  return routes;
}
