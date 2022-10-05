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

export class ApiResult<TResult = void> {
    public error?: any;
    public result?: TResult;
    public statusCode: number;
    public errorMessage?: string;

    constructor(statusCode: number, result?: TResult, errorMessage?: string, error?: any) {
        this.error = error;
        this.result = result;
        this.statusCode = statusCode;
        this.errorMessage = errorMessage;
    }
}