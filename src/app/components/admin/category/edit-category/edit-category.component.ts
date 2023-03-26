import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UpdateCategoryRequest } from 'src/app/commons/request/UpdateCategoryRequest';
import { AttachmentFileResponse } from 'src/app/commons/response/AttachmentFileResponse';
import { CategoriesResponse } from 'src/app/commons/response/CategoriesResponse';
import { CategoryResult } from 'src/app/commons/result/CategoryResult';
import { FileAttachmentService } from 'src/app/services/attachment/file-attachment.service';
import { CategoryService } from 'src/app/services/category/category.service';
import {SendRequest} from "../../../../commons/request/SendRequest";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @Input() data!: CategoryResult;
  @Output() sendData = new EventEmitter<SendRequest<CategoryResult>>();
  images: string = '';
  sendRequest!: SendRequest<CategoryResult>;
  attachmentResponse!: AttachmentFileResponse;
  request!: UpdateCategoryRequest;
  response!: CategoriesResponse;
  constructor(private attachmentService:FileAttachmentService,
    private categoryService: CategoryService) {
    this.sendRequest = new SendRequest<CategoryResult>();
    this.request=new UpdateCategoryRequest();
  }
  ngOnInit() {
  }

  cancel() {
    this.goBack();
  }

  goBack() {
    this.sendRequest.api = 'home';
    this.sendRequest.method = 'GET';
    this.sendData.emit(this.sendRequest);
  }

  uploadFile(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
  reader.onload = () => {
    this.images = reader.result as string;
  }
  reader.readAsDataURL(file);
    if (file) {
      this.attachmentService.uploadFile(file).subscribe(res=>{
        this.attachmentResponse = res as AttachmentFileResponse;
        this.request.attachmentId=this.attachmentResponse.id;
      });
    }
  }

  editCategory() {
    this.request.id=this.data.id;
    this.request.name=this.data.name;
    this.request.status=this.data.status;
    this.request.description=this.data.description;
    this.categoryService.updateCategory(this.request).subscribe(res=>{
      this.goBack();
      this.response = res as CategoriesResponse;
      if(this.response.status==200){
        alert(this.response.message);
      }
    });
  }
}
