import { Component, ElementRef, inject, viewChild } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TasksService } from '../../services/tasks.service'

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    private formEl = viewChild<ElementRef<HTMLFormElement>>('form')
    // Neu dung new se sinh ra van de lon khi o noi khac can goi service nay thi se lam viec tren cac instance khac nhau va khong the chia se du lieu, khong dong nhat
    private tasksService = inject(TasksService)
    onAddTask(title: string, description: string) {
        this.tasksService.addTask({ title, description })
        this.formEl()?.nativeElement.reset()
    }
}
