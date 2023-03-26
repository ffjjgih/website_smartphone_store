import {Route} from "@angular/router";
import {LoginComponent} from "./login/login.component";

export const sharedRouting: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  }
]
