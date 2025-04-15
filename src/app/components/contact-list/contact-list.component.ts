import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [ContactCardComponent, NgFor],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts$;
  selectedContact: any = null;

  constructor(private contactService: ContactService) {
    this.contacts$ = this.contactService.getContacts();
  }

  onDelete(id: number) {
    this.contactService.deleteContact(id);
    if (this.selectedContact?.id === id) {
      this.selectedContact = null;
    }
  }

  onEdit(contact: any) {
    this.selectedContact = { ...contact };
  }
}


