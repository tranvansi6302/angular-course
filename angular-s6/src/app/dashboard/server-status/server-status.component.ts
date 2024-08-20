import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss',
})
export class ServerStatusComponent implements OnInit {
  // private interval?: NodeJS.Timeout;
  currentStatus = 'online';
  // Clean up cacht tiep can voi cac phien ban moi
  private destroyRef = inject(DestroyRef);

  // constructor() {
  //   setInterval(() => {
  //     // Radom online, offline, unknown
  //     const statuses = ['online', 'offline', 'unknown'];
  //     const index = Math.floor(Math.random() * statuses.length);
  //     this.currentStatus = statuses[index];
  //   }, 3000);
  // }
  // Doi voi cong viec tinh thoi gian nhu tren hoac khoi tao gia tri ban dau thi nen su dung ngOnInit

  constructor() {
    // Khi dung currentStatus la signal va ben trong constructor console.log thi signal se khong duoc dang ky vi vay phai dung them effect
    // effect((onCleanup) => {
    //   console.log('ServerStatusComponent.constructor', this.currentStatus);
    // Ngoai ra cung co onCleanup de lam sach
    //   onCleanup(() => {});
    // });
  }

  ngOnInit() {
    // this.interval =
    const interval = setInterval(() => {
      // Radom online, offline, unknown
      const statuses = ['online', 'offline', 'unknown'];
      const index = Math.floor(Math.random() * statuses.length);
      this.currentStatus = statuses[index];
    }, 3000);

    // Clean up
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   if (this.interval) {
  //     clearInterval(this.interval);
  //   }
  // }
}
