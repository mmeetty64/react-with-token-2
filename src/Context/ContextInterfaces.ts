import { ReactNode } from "react";

interface IValues {
    getUser(data: IUser): void;
    user: IUser;
}

interface IUser {
    address: string,
    login: string,
    balance: number,
    presWhiteList: boolean,
    deveveloper: boolean,
    investor: boolean,
    admin: boolean
}
interface IProps {
    children: ReactNode;
}

export type {
    IValues,
    IUser,
    IProps
}