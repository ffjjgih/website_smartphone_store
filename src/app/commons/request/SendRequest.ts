export class SendRequest<T>{
  api!: string;
  method!: string;
  data!:T;
  productsId!: number[];
  description!: string;
}
