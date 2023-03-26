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
      'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        'Access-Control-Max-Age': '86400',
        'withCredentials': 'true',
        'Access-Control-Allow-Credentials': 'true'

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
