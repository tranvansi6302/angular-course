import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType: 'cel' | 'fah'
  ): string {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let outputTemp: number;
    if (inputType === 'cel' && outputType === 'fah') {
      // Chuyển đổi từ độ C sang độ F
      outputTemp = val * 1.8 + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      // Chuyển đổi từ độ F sang độ C
      outputTemp = (val - 32) / 1.8;
    } else {
      outputTemp = val;
    }
    let symbol = outputType === 'cel' ? '°C' : '°F';
    return outputTemp.toFixed(1) + symbol;
  }
}
