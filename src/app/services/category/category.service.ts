import { Injectable } from '@angular/core';
import {environment} from "../../../enviroments/invironment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AddCategoryRequest} from "../../commons/request/AddCategoryRequest";
import { UpdateCategoryRequest } from 'src/app/commons/request/UpdateCategoryRequest';
import { Filter } from 'src/app/commons/result/Filter';

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

  updateCategory(request:UpdateCategoryRequest) {
    return this.http.put(this.api+'/update', request,this.httpOptions);
  }

  deleteCategory(id:number) {
    return this.http.delete(this.api+'/delete/'+id,this.httpOptions);
  }

  // getCategories(filter:Filter) {
  //   return this.http.get(this.api+`/all?page=${filter.page}&size=${filter.size}&
  //   sort=${filter.sort}&search=${filter.search}&status=${filter.status}&fromDate=${filter.fromDate}&toDate=${filter.toDate}&order=${filter.order}`,this.httpOptions);
  // }
  getCategories(filter:Filter) {
      return this.http.get(this.api+`/all`,this.httpOptions);
    }

  detailCategory(id:number) {
    return this.http.get(this.api+'/get-by-id/'+id,this.httpOptions);
  }
}
