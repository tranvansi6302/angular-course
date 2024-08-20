import { Component } from '@angular/core'
import { AuthLayoutComponent } from '../../../layouts/auth-layout/auth-layout.component'
import { InputAuthComponent } from '../../../shared/components/input-auth/input-auth.component'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [AuthLayoutComponent, InputAuthComponent, ButtonComponent, RouterLink],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {}
