import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from "./login/login.component";
import {RouterLink} from "@angular/router";

;

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
    ],
})
export class SharedModule {

}
