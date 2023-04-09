import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProductRequest } from 'src/app/commons/request/AddProductRequest';
import { Filter } from 'src/app/commons/result/Filter';
import { environment } from 'src/enviroments/invironment';
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api= BASE_API+"product";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
  };
  constructor(private http: HttpClient) { }

  createProduct(request:AddProductRequest) {
    return this.http.post(this.api+'/create', request,this.httpOptions);
  }

  getProducts(filter:Filter) {
    return this.http.get(this.api+`/all?page=${filter.page}&size=${filter.size}&
    sort=${filter.sort}&search=${filter.search}&status=${filter.status}&fromDate=${filter.fromDate}&toDate=${filter.toDate}&order=${filter.order}`,this.httpOptions);
  }

  getProductsToSell(filter:Filter) {
    return this.http.get(this.api+`/get-sell?page=${filter.page}&size=${filter.size}&
    sort=${filter.sort}&search=${filter.search}&status=${filter.status}&fromDate=${filter.fromDate}&toDate=${filter.toDate}&order=${filter.order}`,this.httpOptions);
  }
}
