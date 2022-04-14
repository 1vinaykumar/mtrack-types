import { IBaseModel } from "../common";

export interface IWatchList {
    stocks: IStock[];
    indices: IIndex[];
    mutualFunds: IMutualFund[];
    institutions: IInstitution[];
}

export interface IStockSymbol {
    name: string;
    symbol: string;
    serialno?: number;
    marketcap?: number;
}

export interface IStockFinancials {
    eps: number;
    pe: number;
    pb: number;
    roe: number;
    marketCap: number;
    bookValue: number;
    industryPE: number;
    dividendYield: number;
}

export interface IStock extends IBaseModel {
    lastPrice: number;
    currentPrice: number;
    low52week: number;
    high52week: number;
    financials?: IStockFinancials;
}

export interface IMutualFund extends IBaseModel {
    holdings: IStock[];
    currentNav: number;
}

export interface IInstitution extends IBaseModel {
    buy: number;
    sell: number;
    net: number;
}

export interface IIndex extends IBaseModel {
    previous: number;
    current: number;
}