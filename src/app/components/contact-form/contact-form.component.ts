import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  @Input() contact: any;
  @Output() saved = new EventEmitter<void>();

  constructor(private contactService: ContactService) {}

  saveContact() {
    if (this.contact.id) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contactService.addContact(this.contact);
    }

    this.saved.emit(); // notify parent
    this.contact = { fName: '', lName: '', phoneNumber: '', email: '' };
  }
}
