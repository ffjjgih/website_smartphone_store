import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerComponent} from "./customer.component";
import {LoginComponent} from "../shared/login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

export const CustomerRouting: Route[] = [
      {
        path: '',
        component: CustomerComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
]

@NgModule({
  imports: [RouterModule.forChild(CustomerRouting)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {

}
