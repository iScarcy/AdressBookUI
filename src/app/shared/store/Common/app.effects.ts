import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { emptyaction,  showalert } from "./app.action";
import { exhaustMap, map, of } from "rxjs";
import { ISnackBarMessage } from "src/app/interfaces/ISnackBarMessage";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
 

@Injectable()
export class AppEffects {
    constructor(private $action:Actions, private _snackbar: MatSnackBar){

    }

    _showalert=createEffect(() =>  
            this.$action.pipe(
                ofType(showalert),
                exhaustMap((action:ISnackBarMessage) => {
                    return this.showsnackbar(action.message, action.resulttype).afterDismissed().pipe(
                        map(() => {
                            return emptyaction();
                        })
                    )
                })
            )
     );

    showsnackbar(message: string, resulttype: string = 'fail'){
        console.log("resulttype --->"+resulttype)
        console.log("message    --->"+message)
        let _class = 'green-snackbar'
        return this._snackbar.open(message, 'OK', {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 5000,
            panelClass: [_class]

        })
    }

    
}
