import { AttachmentFileResponse } from "../response/AttachmentFileResponse";

export class DetailBillResult{
    image!: AttachmentFileResponse;
    name!: string;
    price!: number;
    quantity!: number;
    sumPrice!: number;
}