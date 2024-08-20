import { Component, input, Input } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    label = input<string>()
    size = input<'large' | 'small'>('small')
    type = input<'button' | 'submit'>('button')
    severity = input<'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' | 'contrast'>(
        'primary'
    )
}
