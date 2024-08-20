import { Injectable, signal } from '@angular/core'
import { Task } from '../models/task.model'

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = signal<Task[]>([])
    allTasks = this.tasks.asReadonly()
    addTask(task: Pick<Task, 'title' | 'description'>) {
        this.tasks.update((tasks) => [
            ...tasks,
            {
                id: Math.random().toString(36).substr(2, 9),
                status: 'OPEN',
                ...task
            }
        ])
    }

    updateTaskStatus(taskId: string, status: Task['status']) {
        this.tasks.update((tasks) => tasks.map((task) => (task.id === taskId ? { ...task, status } : task)))
    }
}
