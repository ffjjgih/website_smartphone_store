import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/commons/result/Filter';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { BrandResponse } from 'src/app/commons/response/BrandsResponse';
import { BrandResult } from 'src/app/commons/result/BrandResult';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-view-brand',
  templateUrl: './view-brand.component.html',
  styleUrls: ['./view-brand.component.css']
})
export class ViewBrandComponent implements OnInit{
  @Output() sendData = new EventEmitter<SendRequest<BrandResult>>();
  sendRequest!: SendRequest<BrandResult>;
  filter!: Filter;
  brands!: BrandResult[];
  brandsResponse!: BrandResponse;

  constructor(private brandService: BrandService) {
    this.sendRequest = new SendRequest();
    this.filter = new Filter();
    this.brandsResponse = new BrandResponse();
    this.brandService.getBrand(this.filter).subscribe(data => {
      this.brandsResponse = data as BrandResponse;
    });
  }

  ngOnInit() {
  }

  goToCreateBrand() {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'add';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  goToEditBrand(brand: BrandResult) {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'edit';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = brand;
    this.sendData.emit(this.sendRequest);
  }

  goToDetailBrand(brand: BrandResult) {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'detail';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = brand;
    this.sendData.emit(this.sendRequest);
  }

  deleteBrand(brand: BrandResult) {
    const conf=confirm('Bạn có chắc chắn muốn xóa hãng sản xuất này không?');
    if(conf){
    for (let i = 0; i < this.brandsResponse.data.length; i++) {
      if (this.brandsResponse.data[i].id == brand.id) {
        this.brandsResponse.data.splice(i, 1);
      }
    }
    this.brandService.deleteBrand(brand.id).subscribe(res => {
      alert('xóa thành công');
    })
  }
  }

  changePage() {
    this.brandService.getBrand(this.brandsResponse.filter).subscribe(data => {
      this.brandsResponse = data as BrandResponse;
    });
  }
}
