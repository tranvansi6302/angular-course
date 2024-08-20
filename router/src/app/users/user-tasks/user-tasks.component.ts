import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  // userId = input.required<string>();
  private usersService = inject(UsersService);
  // userName = '';
  private destroyRef = inject(DestroyRef);
  title = input.required<string>();
  private activetedRoute = inject(ActivatedRoute);

  // userName = computed(
  //   () =>
  //     this.usersService.users.find((user) => user.id === this.userId())?.name
  // );

  // Phiên bản angular cũ hơn có thể không hổ trợ input binding
  // ngOnInit(): void {
  //   console.log('Input title data: ', this.title());
  //   console.log(this.activetedRoute.snapshot.params['userId']);
  //   const subscription = this.activetedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       this.userName =
  //         this.usersService.users.find(
  //           (user) => user.id === paramMap.get('userId')
  //         )?.name || '';
  //     },
  //   });
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }

  // Với sự hổ trợ của resolve nếu không có input binding thì làm giống như trong ngOnInit
  userName = input.required<string>();
}

export const resolveUserName: ResolveFn<string> = (
  activetedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (user) => user.id === activetedRoute.params['userId']
    )?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activetedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return resolveUserName(activetedRoute, routerState) + 'Tasks';
};
