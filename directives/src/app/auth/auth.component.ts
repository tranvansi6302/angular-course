import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LogDirective } from '../directives/log.directive';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  hostDirectives: [LogDirective], // Sử dụng directive trong component này để log ra console tránh phải đi vào file html để gắn directive
})
export class AuthComponent {
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
