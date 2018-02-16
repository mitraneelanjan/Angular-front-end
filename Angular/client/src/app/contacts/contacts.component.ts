import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;
  name: string;
  age: number;
  phone: number;
  gender: string;

  constructor(private contactService: ContactService) { }

addContacts(){
  const newContact = {
    name: this.name,
    age: this.age,
    phone: this.phone,
    gender: this.gender
  }

  this.contactService.addContact(newContact)
    .subscribe(contact => {
      this.contacts.push(contact);
    });
}

getContact(phone:number)
{
  this.contactService.getContacts(phone)
  .subscribe( contacts =>
  this.contact= contacts) ;

}

  ngOnInit() {


  }

}
