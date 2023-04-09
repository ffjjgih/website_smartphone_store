import { AttachmentFileResponse } from "../response/AttachmentFileResponse";

export class ShipperResult{
    fullname!: string;
    phone!: string;
    email!: string;
    shipCode!: string;
    countOrder!: number;
    attachment!: AttachmentFileResponse;
}