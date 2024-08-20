import { Component, input, Input } from '@angular/core'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext'

@Component({
    selector: 'app-input-auth',
    standalone: true,
    imports: [InputTextModule, FloatLabelModule],
    templateUrl: './input-auth.component.html',
    styleUrl: './input-auth.component.scss',
})
export class InputAuthComponent {
    name = input.required<string>()
    label = input<string>()
    type = input<'text' | 'password'>('text')
}
