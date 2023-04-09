import { AttachmentFileResponse } from "../response/AttachmentFileResponse";

export class TransportCompanyResult {
  id!: number;
  name!: string;
  address!: string;
  phone!: string;
  email!: string;
  description!: string;
  status!: string;
  createdDate!: Date;
  createdBy!: string;
  updatedDate!: Date;
  updatedBy!: string;
  website!: string;
  countOrder!: number;
  attachment!:AttachmentFileResponse;
}