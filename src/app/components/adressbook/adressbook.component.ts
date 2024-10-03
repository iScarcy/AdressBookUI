import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IContact } from 'src/app/interfaces/IContact';
import { loadcontacts } from 'src/app/shared/store/adressbook.actions';
import { getcontactslist } from 'src/app/shared/store/adressbook.selectors';

@Component({
  selector: 'app-adressbook',
  templateUrl: './adressbook.component.html',
  styleUrls: ['./adressbook.component.css']
})
export class AdressbookComponent implements OnInit{
  
  constructor(private store: Store){}
  
  contactsList!: IContact[];
  displayedColums: string[] = ["nome", "cognome", "dataNascita"]
  ngOnInit(): void {
    this.store.dispatch(loadcontacts());
    this.store.select(getcontactslist).subscribe(list =>{
      this.contactsList = list;
      console.log(this.contactsList);
    });
  }

}
