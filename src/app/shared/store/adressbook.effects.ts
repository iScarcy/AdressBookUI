import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"; 
import { AdressbookService } from "src/app/services/adressbook.service";
import { LOAD_CONTACTS, loadcontacts, loadcontactsfail, loadcontactssuccess, NEW_CONTACT, newcontact, newcontactfail, newcontactsucess } from "./adressbook.actions";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { IContact } from "src/app/interfaces/IContact";
import { IContactRequest } from "src/app/interfaces/IContactRequest";
import { showalert } from "./Common/App.Action";

@Injectable()
export class AdressbookEffects {

    effects$ = createEffect(() => 
        this.action$.pipe(
            ofType(loadcontacts),
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
        ofType(newcontact),
        switchMap((action:IContactRequest) => {
         
            return this.addressbookService.newContact({ 
                id: "", 
                nome: action.contact.nome, 
                cognome: action.contact.cognome, 
                dataNascita: action.contact.dataNascita,        
                luogoNascita:action.contact.luogoNascita,
                email:action.contact.email,
                sesso:action.contact.sesso,
                tel:action.contact.tel,
                cell:action.contact.cell}).pipe(
                switchMap((data) => {
                    return of(newcontactsucess({contact: data}),
                    showalert({message:'Crerate success',resulttype: 'pass'}))
                }),
                catchError((_error)=>of(showalert({message:'Faild to crerate new contact',resulttype: 'fail'})))
            );
            })
        )
        );      
          
    constructor(
        private action$: Actions,
        private addressbookService: AdressbookService 
    ){}
}