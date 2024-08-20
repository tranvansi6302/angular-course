import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CanDeactivateFn, Router, RouterLink } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  submitted = false;
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  private tasksService = inject(TasksService);
  private router = inject(Router);

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );
    this.submitted = true;
    this.router.navigate(['users', this.userId(), 'tasks'], {
      replaceUrl: true,
    });
  }
}

// Nếu người dùng có điền dữ liệu mà rời khỏi trang đó thì hiển thị thông báo người dùng có muốn rời không
export const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (
  component
) => {
  if (
    component.enteredTitle() ||
    component.enteredSummary() ||
    component.enteredDate()
  ) {
    if (component.submitted) {
      return true;
    }
    return window.confirm('Do you really want to leave?');
  }
  return true;
};
