import { FC, createContext, useState } from "react";
import { IValues, IProps, IUser, } from "./ContextInterfaces";

export const Context = createContext({} as IValues);

export const ContextWrapper: FC<IProps> = ({ children }) => {
   const inirialState = {
      address: '',
      login: '',
      balance: 0,
      presWhiteList: false,
      deveveloper: false,
      investor: false,
      admin: false
   }

   const [user, setUser] = useState(inirialState);

   const getUser = (user: IUser) => {
      setUser(user);
   }

   const logout = () => {
      setUser(inirialState);
   }

   const values = {
      user,
      getUser,
      logout
   }
   return (
      <Context.Provider value={values}>
         {children}
      </Context.Provider>
   )
}