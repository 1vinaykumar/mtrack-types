import { IBaseUser } from "../common";
import { SourceType } from "../enums";
import { IMutualFund } from "../stocks";
import { IBaseModel, ITransaction } from "../common";

export interface IMoneySource extends IBaseModel {
    amount: number;
    type: SourceType;
    transactions: ITransaction[];
}

export interface IStockSource extends IBaseModel {
    transactions: ITransaction[];
}

export interface ISip extends IBaseModel {
    amount: number;
    dayInMonth: Date;
}

export interface IMutualFundSource {
    sips: ISip[];
    buyNav: number;
    quantity: number;
    mutualFund: IMutualFund;
    transactions: ITransaction[];
}

export interface IBillSource extends IBaseModel {
    payAt: Date;
    amount: number;
    frequency: number;
    transactions: ITransaction[];
}

export interface IUserSources extends IBaseUser {
    bills: IBillSource[];
    money: IMoneySource[];
    stocks: IStockSource[];
    mutualFunds: IMutualFundSource[];
}
