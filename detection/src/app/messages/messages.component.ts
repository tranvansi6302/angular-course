import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  // Tối ưu change detection bằng cách sử dụng OnPush (hiệu quả hơn khi dùng zone.js) nên dùng trong các trường hợp các comp không có sự ràng buộc với các comp khác

  // Khi tối ưu cần tìm những nơi cần tránh phát hiện thay đổi chứ không phải nơi xảy ra các sự kiện

  // Và nó chỉ được kích hoạt khi đầu vào thay đổi
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }
}
