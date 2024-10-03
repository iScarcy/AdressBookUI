import { IContact } from "src/app/interfaces/IContact";

export interface IAdressBookModel{
    contacts:IContact[],
    errormessage:string
}