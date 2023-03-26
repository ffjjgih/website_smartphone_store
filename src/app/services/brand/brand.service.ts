import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from 'src/app/commons/result/Filter';
import { BrandRequest } from 'src/app/commons/request/BrandRequest';
import { environment } from 'src/enviroments/invironment';
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  api= BASE_API+"brand";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
  };
  constructor(private http: HttpClient) { }

  createBrand(request:BrandRequest) {
    return this.http.post(this.api+'/create', request,this.httpOptions);
  }

  updateBrand(request:BrandRequest) {
    return this.http.put(this.api+'/update', request,this.httpOptions);
  }

  deleteBrand(id:number) {
    return this.http.delete(this.api+'/delete/'+id,this.httpOptions);
  }
  getBrand(filter:Filter) {
    return this.http.get(this.api+`/all?page=${filter.page}&size=${filter.size}&
    sort=${filter.sort}&search=${filter.search}&status=${filter.status}&fromDate=${filter.fromDate}&toDate=${filter.toDate}&order=${filter.order}`,this.httpOptions);
  }
}
