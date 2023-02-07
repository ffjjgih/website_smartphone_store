import {Route, RouterModule} from "@angular/router";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {NgModule} from "@angular/core";
import {CustomerComponent} from "./customer.component";

export const CustomerRouting: Route[] = [
      {
        path: '',
        component: CustomerComponent
      },
      // {
      //   path:'detail-product',
      //   component:CustomerComponent
      // }
]

@NgModule({
  imports: [RouterModule.forChild(CustomerRouting)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {

}
