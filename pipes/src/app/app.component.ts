import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    // Nếu sử dụng như vậy sẽ không bị reset lại vì pie so sánh sự thay đổi và thấy đều trỏ về cùng một địa chỉ
    this.historicTemperatures[index] = 18;

    // Cách 1
    // const newTemperature = [...this.historicTemperatures]; // Lúc này tham chiếu đến một địa chỉ khác
    // newTemperature[index] = 18;
    // this.historicTemperatures = newTemperature;
  }
}
