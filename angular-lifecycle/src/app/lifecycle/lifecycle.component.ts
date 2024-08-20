import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  // Giong nhu constructor thuong su dung de goi HTTP request
  ngOnInit() {
    console.log('ngOnInit');
  }

  // Xay ra khi @Input() thay doi -> thuong dung de xu ly logic khi co su thay doi cua @Input()
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // Kiem tra cac thay doi cua component tuc giao dien nguoi dung thay doi, khong khuyen khich su dung tru khi can thiet
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // Xay ra sau khi content projection duoc thuc hien -> no chinh la noi dung duoc truyen vao component (ng-content) it su dung
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // Kiem tra cac thay doi cua content projection  it su dung 
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // Xay ra sau khi view duoc khoi tao  it su dung
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // Kiem tra cac thay doi cua view  it su dung
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // Xay ra khi component bi huy
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
