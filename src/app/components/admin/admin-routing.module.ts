import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";



export const AdminRouting: Route[] = [
  {
        path: '',
        component: AdminComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(AdminRouting)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
