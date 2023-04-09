import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeriesRequeset } from 'src/app/commons/request/SeriesRequest';
import { environment } from 'src/enviroments/invironment';
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  api= BASE_API+"series";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
  };
  constructor(private http: HttpClient) { }

  createSeries(request:SeriesRequeset) {
    return this.http.post(this.api+'/create', request,this.httpOptions);
  }
}
