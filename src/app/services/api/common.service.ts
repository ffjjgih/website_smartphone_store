import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../enviroments/invironment";
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  api= BASE_API;
  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post('login', { username, password });
  }
}
