import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
  imports: [CommonModule], 
})
export class ContactCardComponent {
  @Input() contact: any;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<any>();
}

