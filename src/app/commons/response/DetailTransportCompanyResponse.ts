import { ShipperResult } from "../result/ShipperResult";
import { AttachmentFileResponse } from "./AttachmentFileResponse";

export class DetailTransportCompanyResponse {
  id!: number;
  name!: string;
  status!: number;
  description!: string;
  email!: string;
  phone!: string;
  address!: string;
  website!: string;
  attachment!: AttachmentFileResponse;
  shippers!:ShipperResult[];
}