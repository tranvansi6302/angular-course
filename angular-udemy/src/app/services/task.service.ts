import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummyTasks';
import { NewTaskRequest, Task } from '../models/task.model';
@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = dummyTasks;

  getUsersTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: NewTaskRequest, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
