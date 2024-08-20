import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  // Cách 2
  pure: false, // Khi pure = false thì mỗi khi có sự thay đổi thì sẽ render lại
})
export class SortPipe implements PipeTransform {
  transform(value: number[] | string[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a < b ? 1 : -1;
      }
    });
    return sorted;
  }
}
