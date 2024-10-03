
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IContact } from '../interfaces/IContact';
import { baseAdressBookApiUrl } from '../app.constant';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdressbookService {

  constructor(private _httpClient: HttpClient) { }

  getAdressBook():Observable<IContact[]>{
    return this._httpClient.get<Array<IContact>>(baseAdressBookApiUrl).pipe(
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
}
