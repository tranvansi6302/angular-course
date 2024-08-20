import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  // Cac bien duoc quan ly boi rxjs thuong co cu phap nhu sau messsage$
  messages$ = new BehaviorSubject<string[]>([]);
  private messages: string[] = [];

  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    this.messages = [...this.messages, message];
    this.messages$.next(this.messages);
  }
}
