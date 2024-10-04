import {  createAction, props } from "@ngrx/store";
import { IContact } from "src/app/interfaces/IContact"; 
export const LOAD_CONTACTS='[Adressbook page] load contacts';
export const LOAD_CONTACTS_SUCCESS='[Adressbook page] load contacts SUCCESS';
export const LOAD_CONTACTS_FAIL='[Adressbook page] load contacts FAIL';

export const LOAD_CONTACT_DETAIL='[Adressbook page] load contact detail';
export const LOAD_CONTACT_DETAIL_SUCCESS='[Adressbook page] load contact detail SUCCESS';
export const LOAD_CONTACT_DETAIL_FAIL='[Adressbook page] load contact detail FAIL';

export const loadcontacts=createAction(LOAD_CONTACTS)
export const loadcontactssuccess=createAction(LOAD_CONTACTS_SUCCESS, props<{contacts:IContact[]}>())
export const loadcontactsfail=createAction(LOAD_CONTACTS_FAIL, props<{errormessage:string}>())

export const loadcontactdetail=createAction(LOAD_CONTACT_DETAIL, props<{id:string}>())
export const loadcontactdetailsuccess=createAction(LOAD_CONTACT_DETAIL_SUCCESS, props<{contact:IContact}>())
export const loadcontactdetailfail=createAction(LOAD_CONTACT_DETAIL_FAIL, props<{errormessage:string}>())


export const loadcontact=createAction