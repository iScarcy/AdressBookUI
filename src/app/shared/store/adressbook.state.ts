import { createEntityAdapter } from "@ngrx/entity";
import { IAdressBookModel } from "./adressbook.model";
import { IContact } from "src/app/interfaces/IContact";

export const adressbookAdopter=createEntityAdapter<IContact>()

export const adressbookState:IAdressBookModel=adressbookAdopter.getInitialState({
    isloading:false,
    errormessage:''
});