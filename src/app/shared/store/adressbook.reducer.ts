import { createReducer, on } from "@ngrx/store";
import { initialState } from "./adressbook.state";
import { editcontactsucess, loadcontactdetail, loadcontacts, loadcontactsfail, loadcontactssuccess, newcontactsucess } from "./adressbook.actions";

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
        return {
            contacts: [...state.contacts, action.contact],
            errormessage: ""
        }
    }),
    on(editcontactsucess, (state, action) => {
       
        const _newdata = state.contacts.map(o => {
            return o.id == action.contact.id ? action.contact : o
        })

        return {
            contacts: _newdata,
            errormessage: ""
        }
    })


    
)

export function adressbookReducer(state: any, action: any) {
    return _adressbookReducer(state, action);
}
 