import {
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  // Xu ly truong hop css khong nhan va ng-content chi tao ra vung chua chu khong dua cac phan tu that nhu input, textarea, vao trong component nay nen no nam ngoai pham vi
  encapsulation: ViewEncapsulation.None,
  // Tranh truong hop co them mot the nua co class control bao noi dung, nhu vay se du thua mot the
  host: {
    class: 'control',
    '(click)': 'onClick($event)',
  },
})
export class ControlComponent {
  // Hoac mot cach khac de xu ly la dung @HostBinding khong duoc khuyen khich vi no khong ro rang, nen uu tien dung host
  // @HostBinding('class') class = 'control';
  // Neu co them su kien thi su dung @HostListener

  // De lay doi tuong may chu el
  private el = inject(ElementRef);

  constructor() {
    // Khac voi cac hook thi hai phuong thuc nay se goi lai khi co su thay doi o toan bo ung dung chu khong phai chi rieng o component nay
    // afterRender(() => {
    //   console.log('afterRender...');
    // });
    // afterNextRender(() => {
    //   console.log('afterNextRender...');
    // });
  }

  @Input({ required: true }) label!: string;

  // Dung them chieu den input trong new-ticket.component.html
  @ContentChild('input') control!: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  onClick(event: MouseEvent) {
    console.log('ControlComponent.onClick', event);
    console.log('ControlComponent.onClick', this.control);
  }
}
