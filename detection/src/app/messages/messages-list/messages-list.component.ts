import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MessagesService } from '../../services/message.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  imports: [AsyncPipe],
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  // private cdRef = inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef);
  private messageService = inject(MessagesService);

  messages: string[] = [];

  // ngOnInit(): void {
  //   const subscribeOn = this.messageService.messages$.subscribe((messages) => {
  //     this.messages = messages;
  //     this.cdRef.markForCheck();
  //   });

  //   // Don dep
  //   this.destroyRef.onDestroy(() => {
  //     subscribeOn.unsubscribe();
  //   });
  // }

  // Cach 2 gon hon hay hon tu dong set up va don dep
  messages$ = this.messageService.messages$;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
