import { Injectable } from '@angular/core';
import {environment} from "../../../enviroments/invironment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AddCategoryRequest} from "../../commons/request/AddCategoryRequest";
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  api= BASE_API+"category";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
  };
  constructor(private http: HttpClient) { }

  createCategory(request:AddCategoryRequest) {
    return this.http.post(this.api+'/create', request,this.httpOptions);
  }
}
