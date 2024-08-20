import { Routes } from '@angular/router';
import { resolveUserTasks, TasksComponent } from '../tasks/tasks.component';
import {
  canLeaveEditPage,
  NewTaskComponent,
} from '../tasks/new-task/new-task.component';

export const usersRoutes: Routes = [
  {
    path: '',
    // khi path là users/:userId -> redirectTo: 'tasks' -> path sẽ là users/:userId/tasks
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: TasksComponent,
    // Mặc định resolve sẽ thay đổi khi các router thay đổi chứ không phải các param thay đổi vì vậy cần cấu hình
    runGuardsAndResolvers: 'always',
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  {
    // canActivate:Kiểm tra và quyết định xem có cho phép truy cập vào route hay không., canDeactivate:Kiểm tra và quyết định xem có cho phép rời khỏi route hiện tại hay không
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];
