import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { usersRoutes } from './users/users.routes';
import { inject } from '@angular/core';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess > 0.5) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No Task',
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: usersRoutes,
    // Dữ liệu tĩnh
    data: {
      title: 'User Tasks',
    },

    // Dữ liệu động
    resolve: {
      userName: resolveUserName,
    },

    // Tiêu đề động
    title: resolveTitle,

    // Bảo vệ route canMatch hiện đại hơn canActivate
    canMatch: [dummyCanMatch],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
