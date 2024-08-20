import { Component } from '@angular/core'
import { SignupComponent } from './auth/reactive-forms/signup /signup.component'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [SignupComponent],
})
export class AppComponent {}
