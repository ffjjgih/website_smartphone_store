import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {HomeAdminComponent} from "./home-admin/home-admin.component";



export const AdminRouting: Route[] = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: HomeAdminComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(AdminRouting)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
