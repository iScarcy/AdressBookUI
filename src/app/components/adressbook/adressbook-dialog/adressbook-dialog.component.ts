import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { IContact } from 'src/app/interfaces/IContact';
import { MaterialModule } from 'src/app/shared/material.module';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormsModule, Validators } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { DialogData } from 'src/app/interfaces/IDialogData';
import { Store } from '@ngrx/store';
import { getcontact } from 'src/app/shared/store/adressbook.selectors';

@Component({
  selector: 'app-adressbook-dialog',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },

    // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
    // to your app config. We provide it at the component level here, due to limitations
    // of our example generation script.
    provideMomentDateAdapter(undefined, {useUtc: true}),
  ],
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './adressbook-dialog.component.html',
  styleUrls: ['./adressbook-dialog.component.css']
})
export class AdressbookDialogComponent implements OnInit, OnDestroy  {
  contatto:IContact | undefined = {
    id: '',
    nome: '',
    cognome: '',
    dataNascita: new Date(),
    luogoNascita: '',
    email: '',
    sesso: '',
    tel: '',
    cell: '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<AdressbookDialogComponent>,
    private store: Store
  ){ 
    if(this.data.id!=''){
        this.store.select(getcontact(this.data.id)).subscribe(element => {
          this.contatto = element;    
        })
    }
  }


  FC_nome = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(50),
  ]);
  FC_cognome = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(50),
  ]);

  

  ngOnInit(): void {
   
  }
  ngOnDestroy(): void {
    
  }

  getErrorMessage(): string {
    if (this.FC_nome.hasError('required')) {
      return 'Il nome è obbligatorio';
    }

    if (this.FC_nome.hasError('minlength')) {
      return 'Il nome deve avere almeno 4 caratteri';
    }
    if (this.FC_nome.hasError('maxlength')) {
      return 'Il nome può avere al massimo 15 caratteri';
    }

    return '';

  }

  save():void{
    
    if(this.FC_nome.valid ){

        console.log("data.id:" + this.data.id);
        if(this.data.id!="")
          console.log("salvo")
        else 
          console.log("inserisco")
      }
  }

  dismiss():void{
    this.dialogRef.close();
  }
}
