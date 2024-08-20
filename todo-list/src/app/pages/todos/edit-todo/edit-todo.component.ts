import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { Todos } from '../../../models/todos.model';
import { MessageService } from 'primeng/api';
import { TodosService } from '../../../services/todos.service';

@Component({
  selector: 'app-edit-todo',
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
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss',
  providers: [MessageService],
})
export class EditTodoComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input({ required: true }) todoEdit!: Todos | null;

  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  constructor(
    private todosService: TodosService,
    private messageService: MessageService
  ) {}
  enteredTitle = '';
  enteredSummary = '';
  enteredStartDate = new Date();
  enteredEndDate = new Date();

  ngOnChanges() {
    this.enteredTitle = this.todoEdit?.title || '';
    this.enteredSummary = this.todoEdit?.summary || '';
    this.enteredStartDate = new Date(this.todoEdit?.startDate || '');
    this.enteredEndDate = new Date(this.todoEdit?.endDate || '');
  }
  onSubmit() {
    if (
      this.enteredTitle === '' ||
      this.enteredSummary === '' ||
      this.enteredEndDate.toString() === '' ||
      this.enteredStartDate.toString() === ''
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill all the fields',
      });
      return;
    }
    this.todosService.editTodo({
      id: this.todoEdit?.id || '',
      title: this.enteredTitle,
      summary: this.enteredSummary,
      startDate: this.enteredStartDate.toString(),
      endDate: this.enteredEndDate.toString(),
    });
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Todo Updated',
    });
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
