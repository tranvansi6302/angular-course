import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroy = inject(DestroyRef);
  ngOnInit(): void {
    const subcription = interval(1000)
      .pipe(
        map((value) => {
          return value * 2;
        })
      )
      .subscribe({
        next: (value) => console.log(value),
      });

    this.destroy.onDestroy(() => {
      subcription.unsubscribe();
    });
  }
}
