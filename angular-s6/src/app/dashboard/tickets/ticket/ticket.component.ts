import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../../../models/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  @Input({ required: true }) ticket!: Ticket;
  @Output() close = new EventEmitter<void>();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible); cach nay khong hoat dong
    this.detailsVisible.update((value) => !value);
  }

  onClose() {
    this.close.emit();
  }
}
