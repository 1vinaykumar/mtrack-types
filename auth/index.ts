import { IBaseUser } from "../common";

export interface ILoginUser extends Pick<IBaseUser, "email"> {
    password: string;
}

export interface IRegisterUser extends IBaseUser, ILoginUser { }

export interface IChangePassword extends Pick<ILoginUser, "password"> {
    newPassword: string;
}

export type TokenCode = {
    code: string;
};

export interface ITokenCredentials {
    scope?: string;
    id_token?: string;
    token_type?: string;
    expiry_date?: number;
    access_token?: string;
    refresh_token?: string;
}

export interface IApiResponse<TResponse = unknown> {
    error?: Error;
    success: boolean;
    result?: TResponse;
}

export interface IGoogleUser {
    id: string;
    name: string;
    email: string;
    locale: string;
    picture: string;
    given_name: string;
    family_name: string;
    verified_email: boolean;
}

export class BaseUser implements IBaseUser {
    email = "";
    lastName = "";
    firstName = "";

    constructor(firstName = "", lastName = "", email = "") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    setUserFromGoogle = (user: IGoogleUser) => {
        this.firstName = user.given_name;
        this.lastName = user.family_name;
        this.email = user.email;
    };

    setUserFromMainUser = (user: IBaseUser) => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
    };
}