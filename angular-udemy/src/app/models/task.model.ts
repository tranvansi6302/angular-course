export interface NewTaskRequest {
  title: string;
  summary: string;
  dueDate: string;
}
export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
