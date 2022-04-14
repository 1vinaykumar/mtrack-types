import { Status } from "../enums";

export interface IBaseUser {
    email: string;
    lastName: string;
    firstName: string;
}

export interface IBaseModel {
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    uniqueId: string;
    description?: string;
}

export interface ITransaction extends IBaseModel {
    status: Status;
    amount: number;
    price: number;
    quantity: number;
}