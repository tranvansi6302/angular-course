import { Injectable } from '@angular/core';
import { Todos } from '../models/todos.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private initTodos: Todos[] = [
    {
      id: '1',
      title: 'Todo 1',
      summary: 'Summary 1',
      startDate: '2021-01-01',
      endDate: '2021-01-02',
    },
    {
      id: '2',
      title: 'Todo 2',
      summary: 'Summary 2',
      startDate: '2021-01-02',
      endDate: '2021-01-03',
    },
    {
      id: '3',
      title: 'Todo 3',
      summary: 'Summary 3',
      startDate: '2021-01-03',
      endDate: '2021-01-04',
    },
  ];

  getTodos() {
    return this.initTodos;
  }

  addTodo(todo: Todos) {
    this.initTodos.unshift(todo);
  }

  editTodo(todo: Todos) {
    const index = this.initTodos.findIndex((t) => t.id === todo.id);
    this.initTodos[index] = todo;
  }

  deleteTodo(todo: Todos) {
    const index = this.initTodos.findIndex((t) => t.id === todo.id);
    this.initTodos.splice(index, 1);
  }
}
