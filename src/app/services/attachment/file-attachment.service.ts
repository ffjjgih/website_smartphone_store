import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../enviroments/invironment";
const BASE_API = environment.baseApi;
@Injectable({
  providedIn: 'root'
})
export class FileAttachmentService {
  api= BASE_API+"attachment";
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
  };

  constructor(private http: HttpClient) { }
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.api+'/upload', formData,this.httpOptions);
  }

  getFile(fileId: number) {
    return this.http.get(this.api+'/get-file-by-id/'+fileId);
  }

  downloadFile(fileId: number) {
    return this.http.get(this.api+'/download-file/'+fileId,{ responseType: 'blob' });
  }
}
