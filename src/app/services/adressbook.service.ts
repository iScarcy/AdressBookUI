
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { IContact } from '../interfaces/IContact';
import { baseAdressBookApiUrl } from '../app.constant';
import { map, Observable } from 'rxjs';
import { IContactResponse } from '../interfaces/IContactResponse';

@Injectable({
  providedIn: 'root'
})
export class AdressbookService {

  constructor(private _httpClient: HttpClient) { }

  getAdressBook():Observable<IContact[]>{
    return this._httpClient.get<Array<IContact>>(baseAdressBookApiUrl+"AdressBook").pipe(
      map(people => people.map(person => ({
        
        id: person.id, 
        nome: person.nome, 
        cognome: person.cognome, 
        dataNascita: person.dataNascita,        
        luogoNascita:person.luogoNascita,
        email:person.email,
        sesso:person.sesso,
        tel:person.tel,
        cell:person.cell

      })))
    );
  }

  newContact(contatto: IContact):Observable<IContact>{
    
      let adressBookServiceUrl: string = `${baseAdressBookApiUrl}AdressBook`;
      return  this._httpClient
          .post<IContactResponse>(adressBookServiceUrl, contatto).pipe(
            map(contact => ({
              id: contact.ObjID, 
              nome: contatto.nome, 
              cognome: contatto.cognome, 
              dataNascita: contatto.dataNascita,        
              luogoNascita:contatto.luogoNascita,
              email:contatto.email,
              sesso:contatto.sesso,
              tel:contatto.tel,
              cell:contatto.cell
            }))
          );

        
  }

  editContact(contatto: IContact):Observable<IContact>{

    let adressBookServiceUrl: string = `${baseAdressBookApiUrl}AdressBook`;
    return  this._httpClient
        .patch(adressBookServiceUrl, contatto).pipe(
          map(contact => ({
            id: contatto.id, 
            nome: contatto.nome, 
            cognome: contatto.cognome, 
            dataNascita: contatto.dataNascita,        
            luogoNascita:contatto.luogoNascita,
            email:contatto.email,
            sesso:contatto.sesso,
            tel:contatto.tel,
            cell:contatto.cell
          }))
        );

  }

  deleteContact(id:string){

  
    let adressBookServiceUrl: string = `${baseAdressBookApiUrl}AdressBook?Id=${id}`;
    return this._httpClient.delete<HttpResponse<string>>(adressBookServiceUrl)

  }
}
