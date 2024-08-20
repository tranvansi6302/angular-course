import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,

  host: {
    '(click)': 'onConfirmLeavePage($event)', // This is a host listener
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', {
    alias: 'appSafeLink',
  });

  // Hoặc dùng host để lấy ra href của thẻ a
  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective instantiated');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmed = window.confirm(
      'Are you sure you want to leave this page?'
    );
    if (confirmed) {
      //  const address = (event.target as HTMLAnchorElement).href;
      const address = this.hostElement.nativeElement.href;
      (event.target as HTMLAnchorElement).setAttribute(
        'href',
        `${address}?from=${this.queryParam()}`
      );
      return;
    }
    // Prevent the default behavior of the event
    event.preventDefault();
  }
}
