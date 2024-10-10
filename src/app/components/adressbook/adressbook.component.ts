import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { IContact } from 'src/app/interfaces/IContact';
import { deletecontact, loadcontacts } from 'src/app/shared/store/adressbook.actions';
import { getcontact, getcontactslist } from 'src/app/shared/store/adressbook.selectors';
import { AdressbookDialogComponent } from './adressbook-dialog/adressbook-dialog.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adressbook',
  templateUrl: './adressbook.component.html',
  styleUrls: ['./adressbook.component.css']
})
export class AdressbookComponent implements OnInit{
  
  constructor(private store: Store,
    private dialog: MatDialog,
  ){}
  
  contactsList!: IContact[];
 
  displayedColums: string[] = ["nome", "cognome", "dataNascita","action"]
  datasource:any;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  ngOnInit(): void {
    this.store.dispatch(loadcontacts());
    
    this.store.select(getcontactslist).subscribe(list =>{
      this.contactsList = list;
      console.log( this.contactsList);
      this.datasource = new MatTableDataSource<IContact>(this.contactsList);

      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  openDetailDialog(id:string):void{
    
    
   
     
    let config: MatDialogConfig = {
        panelClass: "dialog-responsive",
        disableClose: true,
        data: {id:id}
       // data: {message: "Confermi la creazione di un nuovo onomastico ?", callback: () => this.save()}    
      }
      
      let dialogRef = this.dialog.open(AdressbookDialogComponent, config); 
        
  }

  deleteFunction(id:string, name:string){
    if(confirm("Sicuro di voler eliminare contatto di " + name +"?")){
      this.store.dispatch(deletecontact({id}))
    }
  }
}
