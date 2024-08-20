import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private taskService = inject(TaskService);

  onDeleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}
