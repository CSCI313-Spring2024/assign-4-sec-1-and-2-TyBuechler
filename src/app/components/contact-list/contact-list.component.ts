import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NgFor, NgIf } from '@angular/common'; // ✅ ADD THIS

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    ContactCardComponent,
    ContactFormComponent,
    NgFor,
    NgIf // ✅ FIXES THE ERROR!
  ],
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

  onAddNew() {
    this.selectedContact = {
      fName: '',
      lName: '',
      phoneNumber: '',
      email: ''
    };
  }

  onSave() {
    this.selectedContact = null;
  }
}
