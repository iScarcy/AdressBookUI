import { EntityState } from "@ngrx/entity";
import { IContact } from "src/app/interfaces/IContact";

export interface IAdressBookModel extends EntityState<IContact>{
    isloading:boolean,
    errormessage:string
     
}