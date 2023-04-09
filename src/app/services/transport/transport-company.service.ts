import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransportCompanyRequest } from 'src/app/commons/request/TransportCompanyRequest';
import { Filter } from 'src/app/commons/result/Filter';
import { environment } from 'src/enviroments/invironment';
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class TransportCompanyService {

  api= BASE_API+"transport";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
  };
  constructor(private http: HttpClient) {
  }
  
  deleteCompany(id:number){
    return this.http.delete(this.api+'/delete-company/'+id,this.httpOptions);
  }

  createCompany(request:TransportCompanyRequest){
    return this.http.post(this.api+'/create-company',request,this.httpOptions);
  }

  updateCompany(request:TransportCompanyRequest){
    return this.http.post(this.api+'/update-company',request,this.httpOptions);
  }

  detailCompany(id:number){
    return this.http.get(this.api+'/detail-company/'+id,this.httpOptions);
  }

  getCategories(filter:Filter) {
      return this.http.get(this.api+`/all-company?page=${filter.page}&size=${filter.size}&
      sort=${filter.sort}&search=${filter.search}&status=${filter.status}&fromDate=${filter.fromDate}&toDate=${filter.toDate}&order=${filter.order}`,this.httpOptions);
    }
}
