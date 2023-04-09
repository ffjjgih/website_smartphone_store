import { Component, Input, OnInit } from '@angular/core';
import { SendRequest } from 'src/app/commons/request/SendRequest';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {
  @Input() page!: String;
  data!:SendRequest<number>;
  constructor() { }

  ngOnInit(): void {
    
  }

  selectComponent(request: SendRequest<number>) {
    this.data = request;
    this.page = request.api;
  }
}
