import { CommonModule } from '@angular/common'
import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-button',
    imports: [CommonModule],
    template: `
        <button [ngClass]="buttonClass" [disabled]="disabled" (click)="handleClick($event)">
            {{ label }}
        </button>
    `,
    styles: [
        `
            button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
            }
        `
    ],
    standalone: true
})
export class ButtonComponent {
    @Input() label: string = 'Button'
    @Input() buttonClass: string = ''
    @Input() disabled: boolean = false
    @Output() buttonClick = new EventEmitter<Event>()

    handleClick(event: Event): void {
        if (!this.disabled) {
            this.buttonClick.emit(event)
        }
    }
}
