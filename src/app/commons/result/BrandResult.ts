import { AttachmentFileResponse } from "../response/AttachmentFileResponse";

export class BrandResult {
    id!: number;
    name!: string;
    status!: string;
    images!: string;
    description!: string;
    attachment!:AttachmentFileResponse;
    createdDate!: string;
    createdBy!: string;
    modifiedDate!: string;
    modifiedBy!: string;
    sumProduct!: number;
    sumVersion!: number;
    sumSeries!: number;
    sumImport!: number;
    sumExport!: number;
    birthOfDate!: string;
    email!: string;
    website!: string;
    address!: string;
    rate!: number;
}