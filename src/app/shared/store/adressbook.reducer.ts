import { createReducer, on } from "@ngrx/store";
import { initialState } from "./adressbook.state";
import { loadcontactdetail, loadcontacts, loadcontactsfail, loadcontactssuccess, newcontactsucess } from "./adressbook.actions";

const _adressbookReducer = createReducer(
    initialState,
    on(loadcontactssuccess, (state, action) => {
        return {
            contacts: action.contacts,
            errormessage: ""
        }
    }),
    on(loadcontactsfail, (state, action) => {
        return {
            contacts: [],
            errormessage: action.errormessage
        }
    }),
    on(newcontactsucess, (state, action) => {
       let newContact = [...state.contacts];
       newContact.push(action.contact);
        return {
            contacts: newContact,
            errormessage: ""
        }
    })
)

export function adressbookReducer(state: any, action: any) {
    return _adressbookReducer(state, action);
}
 