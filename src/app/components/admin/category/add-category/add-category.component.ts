import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SendRequest} from "../../../../commons/request/SendRequest";
import {FileAttachmentService} from "../../../../services/attachment/file-attachment.service";
import {AttachmentFileResponse} from "../../../../commons/response/AttachmentFileResponse";
import {AddCategoryRequest} from "../../../../commons/request/AddCategoryRequest";
import {CategoryService} from "../../../../services/category/category.service";
import {AddCategoryResponse} from "../../../../commons/response/AddCategoryResponse";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  @Output() sendData = new EventEmitter<SendRequest<Number>>();
  sendRequest!: SendRequest<Number>;
  attachmentResponse!:AttachmentFileResponse;
  addCategoryRequest!:AddCategoryRequest;
  addCategoryResponse!:AddCategoryResponse;
  constructor(private attachmentService: FileAttachmentService,
              private categoryService: CategoryService) {
    this.sendRequest = new SendRequest();
    this.addCategoryRequest = new AddCategoryRequest();
  }
  ngOnInit() {
    this.addCategoryRequest.status="hoạt động";
  }
  cancel() {
    alert('cancel');
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  uploadFile(event: any) {
    console.log(event);
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    if (file) {
      this.attachmentService.uploadFile(file).subscribe(res=>{
        this.attachmentResponse = res as AttachmentFileResponse;
        this.addCategoryRequest.attachmentId=this.attachmentResponse.id;
      });
    }
  }

  save() {
    this.categoryService.createCategory(this.addCategoryRequest).subscribe(res=>{
      this.addCategoryResponse = res as AddCategoryResponse;
      alert('thêm mới thành công');
      this.sendRequest.api = 'home';
      this.sendRequest.method = 'GET';
      this.sendData.emit(this.sendRequest);
    });
  }
}
