export interface AppResponse {
  message: string;
  status: number;
  data: any[];
  pagination?: { [key: string]: any }

  errors?: { [key: string]: any }
}
