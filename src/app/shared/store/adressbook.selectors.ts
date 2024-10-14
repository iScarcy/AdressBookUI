import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAdressBookModel } from "./adressbook.model";
import { adressbookAdopter } from "./adressbook.state";

const getadressbookstate=createFeatureSelector<IAdressBookModel>("addressbook");

const adressbookSelector = adressbookAdopter.getSelectors();

export const getcontactslist=createSelector(getadressbookstate, adressbookSelector.selectAll)

const selectedentities=createSelector(getadressbookstate, adressbookSelector.selectEntities)
/*
export const getcontact = (id: string) =>
    createSelector(getadressbookstate, (state) => state.contacts.find( x => x.id == id ));
*/

export const getcontact = (id: string) =>
    createSelector(selectedentities, (state) => state[id])



