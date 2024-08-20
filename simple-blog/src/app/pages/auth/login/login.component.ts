import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AuthLayoutComponent } from '../../../layouts/auth-layout/auth-layout.component'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { InputAuthComponent } from '../../../shared/components/input-auth/input-auth.component'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [AuthLayoutComponent, InputAuthComponent, ButtonComponent, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {}
