import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None, // hoac thay the button la :host ben file scss
})
export class ButtonComponent {}
