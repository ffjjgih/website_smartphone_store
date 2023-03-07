import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../enviroments/invironment";
import {SignUpRequest} from "../../commons/request/SignUpRequest";
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  api= BASE_API+"auth";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
  };
  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post(this.api+'/login', { username, password },this.httpOptions);
  }

  signUp(signUpRequest: SignUpRequest) {
    return this.http.post(this.api+'/register', signUpRequest,this.httpOptions);
  }
}
