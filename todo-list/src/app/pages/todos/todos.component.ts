import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TreeTableModule } from 'primeng/treetable';
import { TodosService } from '../../services/todos.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { Todos } from '../../models/todos.model';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    ButtonModule,
    FormsModule,
    AddTodoComponent,
    TreeTableModule,
    EditTodoComponent,
    DatePipe,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  isOpenDiaAdd: boolean = false;
  isOpenDiaEdit: boolean = false;
  selectedTodo: Todos | null = null;
  constructor(
    private todosService: TodosService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  get todos() {
    return this.todosService.getTodos();
  }

  onOpenAdd() {
    this.isOpenDiaAdd = true;
  }
  onOpenEdit(todo: Todos) {
    this.isOpenDiaEdit = true;
    this.selectedTodo = todo;
  }
  onVisibleChange(newVisible: boolean) {
    this.isOpenDiaAdd = newVisible;
    this.isOpenDiaEdit = newVisible;
  }

  onOpenDelete(event: Event, todo: Todos) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.todosService.deleteTodo(todo);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Deleted successfully',
        });
      },
      reject: () => {},
    });
  }
}
