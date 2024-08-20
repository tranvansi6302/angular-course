import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { TodosService } from '../../../services/todos.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    FormsModule,
    ToastModule,
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  enteredTitle = '';
  enteredSummary = '';
  enteredStartDate = '';
  enteredEndDate = '';

  constructor(
    private todoService: TodosService,
    private messageService: MessageService
  ) {}

  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  // Add Todos
  onSubmit() {
    if (
      this.enteredTitle === '' ||
      this.enteredSummary === '' ||
      this.enteredEndDate === '' ||
      this.enteredStartDate === ''
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill all the fields',
      });
      return;
    }
    this.todoService.addTodo({
      id: Math.random().toString(),
      title: this.enteredTitle,
      summary: this.enteredSummary,
      startDate: this.enteredStartDate.toString(),
      endDate: this.enteredEndDate.toString(),
    });
    // Clear
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredStartDate = '';
    this.enteredEndDate = '';
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Todo added successfully',
    });
  }
}
