import { IBaseUser } from "../common";
import { IBaseModel, ITransaction } from "../common";

export interface IBaseSource {
    amount: number;
    transactions: ITransaction[];
}

export interface IMoneySource extends IBaseModel, IBaseSource { }

export interface IStockSource extends IBaseModel, IBaseSource { }

export interface ISip extends IBaseModel {
    amount: number;
    dayInMonth: Date;
}

export interface IMutualFundSource extends IBaseModel, IBaseSource {
    sips: ISip[];
}

export interface IBillSource extends IBaseModel, IBaseSource {
    payAt: Date;
    frequency: number;
}

export interface IUserSources extends IBaseUser {
    bills: IBillSource[];
    money: IMoneySource[];
    stocks: IStockSource[];
    mutualFunds: IMutualFundSource[];
}
