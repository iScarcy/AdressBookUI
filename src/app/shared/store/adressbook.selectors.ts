import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAdressBookModel } from "./adressbook.model";

const getadressbookstate=createFeatureSelector<IAdressBookModel>("addressbook");

export const getcontactslist=createSelector(getadressbookstate, (state) => {
    return state.contacts;
})

export const getcontact = (id: string) =>
    createSelector(getadressbookstate, (state) => state.contacts.find( x => x.id == id ));
