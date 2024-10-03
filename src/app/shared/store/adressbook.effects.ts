import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"; 
import { AdressbookService } from "src/app/services/adressbook.service";
import { LOAD_CONTACTS, loadcontactsfail, loadcontactssuccess } from "./adressbook.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

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

    constructor(
        private action$: Actions,
        private addressbookService: AdressbookService 
    ){}
}