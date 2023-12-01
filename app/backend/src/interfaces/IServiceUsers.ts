import { IUsers } from './IUsers';

export interface IServiceUsers {
   status: string,
   data: IUsers | IUsers[] | string | null,
}