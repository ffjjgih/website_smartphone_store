import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/commons/result/Filter';
import { SendRequest } from 'src/app/commons/request/SendRequest';
import { SuppliersResponse } from 'src/app/commons/response/SuppliersResponse';
import { SupplierResult } from 'src/app/commons/result/SupplierResult';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css']
})
export class ViewSupplierComponent implements OnInit{
  @Output() sendData = new EventEmitter<SendRequest<SupplierResult>>();
  sendRequest!: SendRequest<SupplierResult>;
  suppliersResponse!:SuppliersResponse;
  response!:SuppliersResponse;
  filter !:Filter;
  constructor(private supplierService: SupplierService) {
    this.filter = new Filter();
  }

  ngOnInit(): void {
    this.supplierService.getSupplier(this.filter).subscribe(res => {
      this.suppliersResponse = res as SuppliersResponse;
    });
  }

  goToCreateSupplier() {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'add';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  // goToEditBrand(brand: BrandResult) {
  //   this.sendRequest = new SendRequest();
  //   this.sendRequest.api = 'edit';
  //   this.sendRequest.method = 'GET';
  //   this.sendRequest.data = brand;
  //   this.sendData.emit(this.sendRequest);
  // }

  goToEditSupplier(supplier: SupplierResult) {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'edit';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = supplier;
    this.sendData.emit(this.sendRequest);
  }

  goToDetailSupplier(brand: SupplierResult) {
    this.sendRequest = new SendRequest();
    this.sendRequest.api = 'detail';
    this.sendRequest.method = 'GET';
    this.sendRequest.data = brand;
    this.sendData.emit(this.sendRequest);
  }

  deleteSupplier(supplier: SupplierResult) {
    const conf=confirm('Bạn có chắc chắn muốn xóa nhà cung cấp này không?');
    if(conf){
      this.supplierService.deleteSupplier(supplier.id).subscribe(res => {
        this.response = res as SuppliersResponse;
        if (this.response.status == 200) {
          alert(this.response.message);
          this.deleteSupplierInList(supplier);
        }
      });
    }
  }

  deleteSupplierInList(supplier: SupplierResult) {
    for (let i = 0; i < this.suppliersResponse.data.length; i++) {
      if (this.suppliersResponse.data[i].id == supplier.id) {
        this.suppliersResponse.data.splice(i, 1);
      }
    }
  }
  
}
