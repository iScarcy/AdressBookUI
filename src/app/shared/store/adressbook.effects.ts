import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"; 
import { AdressbookService } from "src/app/services/adressbook.service";
import { LOAD_CONTACTS, loadcontactsfail, loadcontactssuccess, NEW_CONTACT, newcontactfail, newcontactsucess } from "./adressbook.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { IContact } from "src/app/interfaces/IContact";

@Injectable()
export class AdressbookEffects {

    effects$ = createEffect(() => 
        this.action$.pipe(
            ofType(LOAD_CONTACTS),
            exhaustMap(() => {
                return this.addressbookService.getAdressBook().pipe(
                    map((data) => {
                        return loadcontactssuccess({contacts: data})
                    }),
                    catchError((_error)=>of(loadcontactsfail({errormessage:_error.message})))
                );
              })
            )
          );
    
    newConcact$ = createEffect(() => 
    this.action$.pipe(
        ofType(NEW_CONTACT),
        exhaustMap((action:IContact) => {
            return this.addressbookService.newContact({ 
                id: "", 
                nome: action.nome, 
                cognome: action.cognome, 
                dataNascita: action.dataNascita,        
                luogoNascita:action.luogoNascita,
                email:action.email,
                sesso:action.sesso,
                tel:action.tel,
                cell:action.cell}).pipe(
                map((data) => {
                    return newcontactsucess({contact: data})
                }),
                catchError((_error)=>of(newcontactfail({errormessage:_error.message})))
            );
            })
        )
        );      
          
    constructor(
        private action$: Actions,
        private addressbookService: AdressbookService 
    ){}
}