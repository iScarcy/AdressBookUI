import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"; 
import { AdressbookService } from "src/app/services/adressbook.service";
import { deletecontact, deletecontactsucess, editcontact, editcontactsucess, LOAD_CONTACTS, loadcontacts, loadcontactsfail, loadcontactssuccess, NEW_CONTACT, newcontact, newcontactfail, newcontactsucess } from "./adressbook.actions";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { IContact } from "src/app/interfaces/IContact";
import { IContactRequest } from "src/app/interfaces/IContactRequest";
import { showalert } from "./Common/app.action";
import { Update } from "@ngrx/entity";

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
                    showalert({message:'Create success',resulttype: 'pass'}))
                }),
                catchError((_error)=>of(showalert({message:'Faild to create new contact',resulttype: 'fail'})))
            );
            })
        )
    );      
    
    editConcact$ = createEffect(() => 
        this.action$.pipe(
            ofType(editcontact),
            switchMap((action:IContactRequest) => {
             
                return this.addressbookService.editContact({ 
                    id: action.contact.id, 
                    nome: action.contact.nome, 
                    cognome: action.contact.cognome, 
                    dataNascita: action.contact.dataNascita,        
                    luogoNascita:action.contact.luogoNascita,
                    email:action.contact.email,
                    sesso:action.contact.sesso,
                    tel:action.contact.tel,
                    cell:action.contact.cell}).pipe(
                    switchMap((data) => {
                       
                        const updaterecord:Update<IContact>={
                            id: action.contact.id,
                            changes:action.contact
                        }

                        return of(editcontactsucess({contact: updaterecord}),
                        showalert({message:'Update success',resulttype: 'pass'}))
                    }),
                    catchError((_error)=>of(showalert({message:'Faild to update contact',resulttype: 'fail'})))
                );
                })
            )
        ); 
    
    deleteConcact$ = createEffect(() => 
        
        this.action$.pipe(
            ofType(deletecontact),
            switchMap((data) => {
               
                var id:string=data.id;
                return this.addressbookService.deleteContact(id).pipe(
                    exhaustMap((test) => {
                        console.log(data);
                        console.log(test);
                        return of(deletecontactsucess({id:id}),
                        showalert({message:'Delete success',resulttype: 'pass'}))
                    }),
                    catchError((_error)=> { console.log(_error); return of(showalert({message:'Faild to delete contact',resulttype: 'fail'}))})
                );
                })
            )
        ); 
     
    constructor(
        private action$: Actions,
        private addressbookService: AdressbookService 
    ){}
}