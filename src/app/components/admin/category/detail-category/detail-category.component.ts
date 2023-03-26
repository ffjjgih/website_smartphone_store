import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { CategoriesResponse } from 'src/app/commons/response/CategoriesResponse';
import { CategoryResult } from 'src/app/commons/result/CategoryResult';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit{
  sendRequest!: SendRequest<CategoryResult>;
  @Output() sendData = new EventEmitter<SendRequest<CategoryResult>>();
  @Input() categoryId!:number;
  response!: CategoriesResponse;
  result!: CategoryResult;
  object!:any;
  constructor(private categoryService: CategoryService) {
    this.sendRequest = new SendRequest();
  }

  ngOnInit(): void {
    if (this.categoryId==undefined || this.categoryId==null || this.categoryId==0) {
      this.sendRequest = new SendRequest<CategoryResult>();
      this.sendRequest.api = 'home';
      this.sendRequest.method = 'GET';
    }
    this.detail();
  }

  cancel() {
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  detail() {
    this.categoryService.detailCategory(this.categoryId).subscribe(res => {
      this.object = res;
      this.response = this.object.body as CategoriesResponse;
      this.result = this.response.data[0];
    });
  }
}
