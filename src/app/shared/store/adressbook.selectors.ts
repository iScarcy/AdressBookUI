import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAdressBookModel } from "./adressbook.model";

const getadressbookstate=createFeatureSelector<IAdressBookModel>("addressbook");

export const getcontactslist=createSelector(getadressbookstate, (state) => {
    return state.contacts;
})