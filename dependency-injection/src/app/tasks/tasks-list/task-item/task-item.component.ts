import { Component, computed, inject, input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Task, TASK_STATUS_OPTION, TaskStatus } from '../../../models/task.model'
import { TasksService } from '../../../services/tasks.service'

@Component({
    selector: 'app-task-item',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './task-item.component.html',
    styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
    private tasksSerice = inject(TasksService)
    task = input.required<Task>()
    taskStatusOptions = inject(TASK_STATUS_OPTION)
    taskStatus = computed(() => {
        switch (this.task().status) {
            case 'OPEN':
                return 'Open'
            case 'IN_PROGRESS':
                return 'Working on it'
            case 'DONE':
                return 'Completed'
            default:
                return 'Open'
        }
    })

    onChangeTaskStatus(taskId: string, status: string) {
        let newStatus: TaskStatus = 'OPEN'

        switch (status) {
            case 'open':
                newStatus = 'OPEN'
                break
            case 'in-progress':
                newStatus = 'IN_PROGRESS'
                break
            case 'done':
                newStatus = 'DONE'
                break
            default:
                break
        }
        this.tasksSerice.updateTaskStatus(taskId, newStatus)
    }
}
