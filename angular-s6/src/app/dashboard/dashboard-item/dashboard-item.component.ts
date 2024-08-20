import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss',
  // encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'dashboard-item',
  // },
  // Nen di toi file scss de chinh sua :host
})
export class DashboardItemComponent {
  @Input({ required: true }) image!: {
    src: string;
    alt: string;
  };
  @Input({ required: true }) title!: string;
}
