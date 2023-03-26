import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from 'src/app/commons/result/Filter';
import { SupplierRequest } from 'src/app/commons/request/SupplierRequest';
import { environment } from 'src/enviroments/invironment';
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  api= BASE_API+"supplier";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
  };
  constructor(private http: HttpClient) { }

  createSupplier(request:SupplierRequest) {
    return this.http.post(this.api+'/create', request,this.httpOptions);
  }

  updateSupplier(request:SupplierRequest) {
    return this.http.put(this.api+'/update', request,this.httpOptions);
  }

  deleteSupplier(id:number) {
    return this.http.delete(this.api+'/delete/'+id,this.httpOptions);
  }

  getSupplier(filter:Filter) {
    return this.http.get(this.api+`/all?page=${filter.page}&size=${filter.size}&
    sort=${filter.sort}&search=${filter.search}&status=${filter.status}&fromDate=${filter.fromDate}&toDate=${filter.toDate}&order=${filter.order}`,this.httpOptions);
  }
}
