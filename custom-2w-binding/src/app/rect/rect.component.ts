import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // @Input({ required: true }) size!: {
  //   width: string;
  //   height: string;
  // };
  // // Rang buoc 2 chieu vua la input vua la output luu y ten phai tuan theo quy tac cua angular la ten input + Change
  // @Output() sizeChange = new EventEmitter<{
  //   width: string;
  //   height: string;
  // }>();

  // Tu angular 17.2 tro len lam don gian hon
  size = model.required<{
    width: string;
    height: string;
  }>();
  onReset() {
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '200',
    // });

    // > 17.2
    this.size.set({
      width: '200',
      height: '200',
    });
  }
}
