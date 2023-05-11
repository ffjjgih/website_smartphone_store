import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SellRequest } from 'src/app/commons/request/SellRequest';
import { environment } from 'src/enviroments/invironment';
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class BillService {
  api= BASE_API+"bill";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
  };
  constructor(private http: HttpClient) {

  }

  transaction(request:SellRequest) {
    return this.http.post(this.api+'/transaction', request,this.httpOptions);
  }

  getBills(search:string, status:string, page:number, size:number) {
    return this.http.get(this.api+'/getBills?search='+search+'&status='+status+'&page='+page+'&size='+size,this.httpOptions);
  }

  getdetailBill(id:number) {
    return this.http.get(this.api+'/detail/'+id,this.httpOptions);
  }
}
