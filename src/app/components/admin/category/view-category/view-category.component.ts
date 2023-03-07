import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SendRequest} from "../../../../commons/request/SendRequest";

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit{
  @Output() sendData = new EventEmitter<SendRequest<Number>>();
  sendRequest!: SendRequest<Number>;
  ngOnInit() {
  }
  constructor() {
    this.sendRequest = new SendRequest();
  }

  create() {
    this.sendRequest.api = 'create';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  edit(id: Number) {
    this.sendRequest.api = 'edit';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = id;
    this.sendData.emit(this.sendRequest);
  }

  detail(id: Number) {
    this.sendRequest.api = 'detail';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = id;
    this.sendData.emit(this.sendRequest);
  }

  delete(id: Number) {

  }
}
