import { Component, OnInit } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { BrandResponse } from 'src/app/commons/response/BrandsResponse';
import { BrandResult } from 'src/app/commons/result/BrandResult';
import { Filter } from 'src/app/commons/result/Filter';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  typeView: string = 'home';
  sendRequest!: SendRequest<BrandResult>;
  response!:BrandResponse;
  filter!:Filter;
  constructor(private brandService:BrandService) {
    this.response = new BrandResponse();
    this.filter = new Filter();
   }

  ngOnInit(): void {
  }
  selectComponent(request: SendRequest<BrandResult>) {
    this.sendRequest = request;
    if (this.sendRequest.api == 'add') {
      this.typeView = 'add';
    }else if (this.sendRequest.api == 'edit') {
      this.typeView = 'edit';
    }else if (this.sendRequest.api == 'detail') {
      this.typeView = 'detail';
    }else if (this.sendRequest.api == 'home') {
      this.brandService.getBrand(this.filter).subscribe(data => {
        this.response = data as BrandResponse;
      });
      this.typeView = 'home';
    }
  }

}
