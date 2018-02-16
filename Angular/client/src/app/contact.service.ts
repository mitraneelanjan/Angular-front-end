import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  getContacts(phone){
    return this.http.get('http://localhost:3000/api/contacts/'+phone)
      .map(res => res.json());
  }

  addContact(newContact){
    var headers= new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers: headers})
      .map(res => res.json());
  }

  

}