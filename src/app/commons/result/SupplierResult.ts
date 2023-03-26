import { AttachmentFileResponse } from "../response/AttachmentFileResponse";

export class SupplierResult {
    id!: number;
    name!: string;
    address!: string;
    phone!: string;
    email!: string;
    description!: string;
    status!: string;
    createdDate!: string;
    createdBy!: string;
    modifiedDate!: string;
    modifiedBy!: string;
    sumImport!: number;
    sumExport!: number;
    sumImportReturn!: number;
    countImport!: number;
    importDatest!: string;
    attachment!: AttachmentFileResponse;
}