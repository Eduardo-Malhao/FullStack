import { IUser } from './IUser';

export interface IServiceUser {
   status: string,
   data: IUser[] | string 
}