import {Component, Input, OnInit} from '@angular/core';
import {SendRequest} from "../../../../commons/request/SendRequest";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @Input() categoryId!: number;
  constructor() {
  }
  ngOnInit() {
  }
}
