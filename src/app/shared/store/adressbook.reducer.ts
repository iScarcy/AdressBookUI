import { createReducer, on } from "@ngrx/store";
import { initialState } from "./adressbook.state";
import { loadcontacts, loadcontactsfail, loadcontactssuccess } from "./adressbook.actions";

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
    })
)

export function adressbookReducer(state: any, action: any) {
    return _adressbookReducer(state, action);
}
 