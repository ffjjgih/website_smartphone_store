import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { CategoriesResponse } from 'src/app/commons/response/CategoriesResponse';
import { CategoryResult } from 'src/app/commons/result/CategoryResult';
import { Filter } from 'src/app/commons/result/Filter';
import { CategoryService } from 'src/app/services/category/category.service';
import {SendRequest} from "../../../../commons/request/SendRequest";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  typeView: string = 'home';
  sendRequest!: SendRequest<CategoryResult>;
  @Output() sendData = new EventEmitter<SendRequest<CategoryResult>>();
  object!:any;
  response!: CategoriesResponse;
  filter!:Filter;
  constructor(private categoryService: CategoryService) {
    this.sendRequest = new SendRequest();
    this.filter = new Filter();
    this.response = new CategoriesResponse();
  }

  ngOnInit(): void {
  }

  selectComponent(request: SendRequest<CategoryResult>) {
    this.sendRequest = request;
    if (this.sendRequest.api == 'create') {
      this.typeView = 'create';
    }else if (this.sendRequest.api == 'edit') {
      this.typeView = 'edit';
    }else if (this.sendRequest.api == 'detail') {
      this.typeView = 'detail';
    }else if (this.sendRequest.api == 'home') {
      this.getCategories();
      this.typeView = 'home';
    }
  }

  getCategories() {
    this.categoryService.getCategories(this.filter).subscribe(res => {
      this.object = res;
      this.response = this.object.body as CategoriesResponse;
    });
  }
}
