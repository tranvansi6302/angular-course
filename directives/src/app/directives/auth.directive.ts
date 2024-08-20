import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from '../auth/auth.model';
import { AuthService } from '../auth/auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); // Truy cập vào template của thẻ mà directive được gắn vào
  private viewContainerRef = inject(ViewContainerRef); // Truy cập vào vị trí trong DOM nơi mà directive được gắn vào
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef); // Tạo view cho template
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
