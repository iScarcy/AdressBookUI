import { createReducer, on } from "@ngrx/store";
import { adressbookAdopter, adressbookState } from "./adressbook.state";
import { deletecontactfail, deletecontactsucess, editcontactfail, editcontactsucess, loadcontactdetail, loadcontacts, loadcontactsfail, loadcontactssuccess, newcontactsucess } from "./adressbook.actions";

const _adressbookReducer = createReducer(
    adressbookState,
    on(loadcontactssuccess, (state, action) => {
        return adressbookAdopter.setAll(action.contacts, {...state, isloading:true});        
    }),
    on(loadcontactsfail, (state, action) => {
        return {...state,errormessage: action.errormessage}       
    }),
    on(newcontactsucess, (state, action) => {
        return adressbookAdopter.addOne(action.contact, state);
        
    }),
    on(editcontactsucess, (state, action) => {
       
        return adressbookAdopter.updateOne(action.contact, state);

    }),
    on(editcontactfail, (state, action) => {
        return {...state,errormessage: action.errormessage}       
    }),
    on(deletecontactsucess, (state, action) => {       
        return adressbookAdopter.removeOne(action.id, state);        
    }),
    on(deletecontactfail, (state, action) => {
        return {...state,errormessage: action.errormessage}       
    }),


    
)

export function adressbookReducer(state: any, action: any) {
    return _adressbookReducer(state, action);
}
 