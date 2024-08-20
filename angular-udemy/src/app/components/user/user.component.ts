import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
} from '@angular/core';
import { User } from '../../models/user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // Cách 1
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Input() isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  // Cách 2 dùng signal input (input chữ thường) chỉ ở dạng chỉ đọc không thể set giá trị lại được
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => `assets/users/${this.avatar()}`);
  // select = output<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
