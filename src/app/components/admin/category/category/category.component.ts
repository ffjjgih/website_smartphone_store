import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SendRequest} from "../../../../commons/request/SendRequest";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  typeView: string = 'home';
  sendRequest!: SendRequest<Number>;
  categoryId: Number = 0;
  @Output() sendData = new EventEmitter<SendRequest<Number>>();
  ngOnInit(): void {
  }

  selectComponent(request: SendRequest<Number>) {
    this.sendRequest = request;
    if (this.sendRequest.api == 'create') {
      this.typeView = 'create';
    }else if (this.sendRequest.api == 'edit') {
      this.typeView = 'edit';
      this.categoryId= this.sendRequest.data;
    }else if (this.sendRequest.api == 'detail') {
      this.typeView = 'detail';
      this.categoryId = this.sendRequest.data;
    }else if (this.sendRequest.api == 'home') {
      this.typeView = 'home';
    }
  }
}
