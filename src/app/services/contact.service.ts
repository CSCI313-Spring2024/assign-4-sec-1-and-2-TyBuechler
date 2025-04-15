import { Injectable, signal } from '@angular/core';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts = signal(CONTACTS);

  getContacts() {
    return this.contacts.asReadonly();
  }

  addContact(contact: any) {
    contact.id = Date.now(); // Unique ID
    this.contacts.update(c => [...c, contact]);
  }

  updateContact(updated: any) {
    this.contacts.update(c => c.map(ct => ct.id === updated.id ? updated : ct));
  }

  deleteContact(id: number) {
    this.contacts.update(c => c.filter(ct => ct.id !== id));
  }
}
