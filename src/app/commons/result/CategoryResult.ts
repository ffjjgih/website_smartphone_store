import { AttachmentFileResponse } from '../response/AttachmentFileResponse';
export class CategoryResult {
    id!: number;
    name!: string;
    status!: string;
    images!: string;
    description!: string;
    attachment!:AttachmentFileResponse;
    createdDate!: String;
    createdBy!: String;
    modifiedDate!: String;
    modifiedBy!: String;
    sumProduct!: number;
    fileId!: number;
}