import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message';
import { ChatService } from 'src/app/services/chat.service';
import { UUID } from 'src/app/utils/uuid';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  public chatMessages: ChatMessage[] = [];
  private containerMessage: HTMLElement;
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.containerMessage = document.getElementById('containerMessage');
    this.chatService.getChats().subscribe((resp) => {
      this.updateChatMessages(resp);
      this.containerMessage.scrollTop = this.containerMessage.scrollHeight;
    });
  }

  private updateChatMessages(newMessages: ChatMessage[]) {
    newMessages.forEach((message) => {
      let isNew = true;
      for (const iterator of this.chatMessages) {
        isNew = isNew && iterator.id !== message.id;
      }
      if (isNew) {
        this.chatMessages.push(message);
      }
    });
  }

  public sendMessage(message: HTMLTextAreaElement) {
    const chatMessage: ChatMessage = {
      id: UUID.generateUUID(),
      user: 'Spawn',
      message: message.value,
      date: new Date(),
    };
    this.chatService.sendMessage(chatMessage);
    message.value = '';
  }
}
