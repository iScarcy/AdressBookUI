import {  createAction, props } from "@ngrx/store";
import { IContact } from "src/app/interfaces/IContact"; 
export const LOAD_CONTACTS='[Adressbook page] load contacts';
export const LOAD_CONTACTS_SUCCESS='[Adressbook page] load contacts SUCCESS';
export const LOAD_CONTACTS_FAIL='[Adressbook page] load contacts FAIL';

export const loadcontacts=createAction(LOAD_CONTACTS)
export const loadcontactssuccess=createAction(LOAD_CONTACTS_SUCCESS, props<{contacts:IContact[]}>())
export const loadcontactsfail=createAction(LOAD_CONTACTS_FAIL, props<{errormessage:string}>())