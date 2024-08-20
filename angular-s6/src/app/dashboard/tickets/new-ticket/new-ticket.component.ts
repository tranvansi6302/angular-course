import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
})
export class NewTicketComponent {
  @Output() add = new EventEmitter<{ title: string; request: string }>();

  // Neu can chon nhieu thi dung ViewChildren
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // Cach 2
  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  // Hoac co the truyen form lam tham so thu 3 giong titleInput va requestInput
  onSubmit(enteredTitle: string, enteredRequest: string) {
    console.log('Submit', enteredTitle, enteredRequest);

    // this.form?.nativeElement.reset();

    //  this.form()?.nativeElement dung ? hoac viewChild.required<ElementRef<HTMLFormElement>>('form');
    this.add.emit({ title: enteredTitle, request: enteredRequest });
    this.form()?.nativeElement.reset();
  }
}
