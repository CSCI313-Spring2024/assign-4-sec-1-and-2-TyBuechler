import { Component, Input } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  @Input() contact: any = {
    fName: '', lName: '', phoneNumber: '', email: ''
  };

  constructor(private contactService: ContactService) {}

  saveContact() {
    if (this.contact.id) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contactService.addContact(this.contact);
    }
    this.contact = { fName: '', lName: '', phoneNumber: '', email: '' };
  }
}

