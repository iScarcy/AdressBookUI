import { EntityState } from "@ngrx/entity";
import { IContact } from "src/app/interfaces/IContact";

export interface IAdressBookModel extends EntityState<IContact>{
 /*   contacts:IContact[],
    errormessage:string
    */
}