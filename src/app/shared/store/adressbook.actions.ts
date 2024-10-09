import {  createAction, props } from "@ngrx/store";
import { IContact } from "src/app/interfaces/IContact"; 
export const LOAD_CONTACTS='[Adressbook page] load contacts';
export const LOAD_CONTACTS_SUCCESS='[Adressbook page] load contacts SUCCESS';
export const LOAD_CONTACTS_FAIL='[Adressbook page] load contacts FAIL';

export const LOAD_CONTACT_DETAIL='[Adressbook page] load contact detail';
export const LOAD_CONTACT_DETAIL_SUCCESS='[Adressbook page] load contact detail SUCCESS';
export const LOAD_CONTACT_DETAIL_FAIL='[Adressbook page] load contact detail FAIL';

export const NEW_CONTACT='[Adressbook page] insert new contact';
export const NEW_CONTACT_SUCCESS='[Adressbook page] insert new contact SUCCESS';
export const NEW_CONTACT_FAIL='[Adressbook page] insert new contact FAIL';

export const EDIT_CONTACT='[Adressbook page] edit contact';
export const EDIT_CONTACT_SUCCESS='[Adressbook page] edit contact SUCCESS';
export const EDIT_CONTACT_FAIL='[Adressbook page] edit contact FAIL';

export const loadcontacts=createAction(LOAD_CONTACTS)
export const loadcontactssuccess=createAction(LOAD_CONTACTS_SUCCESS, props<{contacts:IContact[]}>())
export const loadcontactsfail=createAction(LOAD_CONTACTS_FAIL, props<{errormessage:string}>())

export const loadcontactdetail=createAction(LOAD_CONTACT_DETAIL, props<{id:string}>())
export const loadcontactdetailsuccess=createAction(LOAD_CONTACT_DETAIL_SUCCESS, props<{contact:IContact}>())
export const loadcontactdetailfail=createAction(LOAD_CONTACT_DETAIL_FAIL, props<{errormessage:string}>())

export const newcontact=createAction(NEW_CONTACT, props<{contact:IContact}>());
export const newcontactsucess=createAction(NEW_CONTACT_SUCCESS, props<{contact:IContact}>());
export const newcontactfail=createAction(NEW_CONTACT_FAIL, props<{errormessage:string}>())


export const editcontact=createAction(EDIT_CONTACT, props<{contact:IContact}>());
export const editcontactsucess=createAction(EDIT_CONTACT_SUCCESS, props<{contact:IContact}>());
export const editcontactfail=createAction(EDIT_CONTACT_FAIL, props<{errormessage:string}>())

