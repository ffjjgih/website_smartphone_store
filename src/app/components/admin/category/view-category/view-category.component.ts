import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Filter } from 'src/app/commons/result/Filter';
import { CategoriesResponse } from 'src/app/commons/response/CategoriesResponse';
import { CategoryResult } from 'src/app/commons/result/CategoryResult';
import { CategoryService } from 'src/app/services/category/category.service';
import {SendRequest} from "../../../../commons/request/SendRequest";

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit{
  @Output() sendData = new EventEmitter<SendRequest<CategoryResult>>();
  sendRequest!: SendRequest<CategoryResult>;
  response!: CategoriesResponse;
  object!:any;
  filter!:Filter;
  ngOnInit() {
    this.getCategories();
    this.filter = new Filter();
    this.filter.page = 0;
  }
  constructor(private categoryService: CategoryService) {
    this.sendRequest = new SendRequest();
  }

  create() {
    this.sendRequest.api = 'create';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  edit(request: CategoryResult) {
    this.sendRequest.api = 'edit';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = request;
    this.sendData.emit(this.sendRequest);
  }

  detail(request: CategoryResult) {
    this.sendRequest.api = 'detail';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = request;
    this.sendData.emit(this.sendRequest);
  }

  delete(category: CategoryResult) {
    const conf=confirm('Bạn có chắc chắn muốn xóa loại sản phẩm này không?');
    if(conf){
    for (let i = 0; i < this.response.data.length; i++) {
      if (this.response.data[i].id == category.id) {
        this.response.data.splice(i, 1);
      }
    }
    this.categoryService.deleteCategory(category.id).subscribe(data => {
      alert('xóa thành công');
    })
  }
  }

  getCategories() {
    this.categoryService.getCategories(this.filter).subscribe(res => {
      this.object = res;
      this.response = this.object.body as CategoriesResponse;
    });
  }

  pageChanged(request: number) {
    this.filter.page = request;
    this.getCategories();
  }
  pageSizeChanged(request: number) {
    this.filter.size = request;
    this.getCategories();
  }
}
