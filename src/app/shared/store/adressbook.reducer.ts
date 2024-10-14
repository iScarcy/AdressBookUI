import { createReducer, on } from "@ngrx/store";
import { adressbookAdopter, adressbookState } from "./adressbook.state";
import { deletecontactsucess, editcontactsucess, loadcontactdetail, loadcontacts, loadcontactsfail, loadcontactssuccess, newcontactsucess } from "./adressbook.actions";

const _adressbookReducer = createReducer(
    adressbookState,
    on(loadcontactssuccess, (state, action) => {
        return adressbookAdopter.setAll(action.contacts, state);        
    }),
    on(newcontactsucess, (state, action) => {
        return adressbookAdopter.addOne(action.contact, state);
        
    }),
    on(editcontactsucess, (state, action) => {
       
        return adressbookAdopter.updateOne(action.contact, state);

    }),
    on(deletecontactsucess, (state, action) => {
       
        return adressbookAdopter.removeOne(action.id, state);
        
    })


    
)

export function adressbookReducer(state: any, action: any) {
    return _adressbookReducer(state, action);
}
 