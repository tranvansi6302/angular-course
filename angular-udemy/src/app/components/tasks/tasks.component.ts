import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  // Private sẽ tự động tạo ra 1 biến taskService và gán giá trị từ constructor nếu không dùng private thì phải đặt biến taskService bên ngoài và bên trong contructor -> this.taskService = taskService
  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUsersTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
