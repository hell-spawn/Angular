import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private firestore: AngularFirestore) {}

  getChats(): Observable<ChatMessage[]> {
    return this.firestore
      .collection<ChatMessage>('chats', (ref) =>
        ref.orderBy('date', 'asc').limitToLast(5)
      )
      .valueChanges();
  }

  sendMessage(chatMessage: ChatMessage) {
    this.firestore.collection('chats').add(chatMessage).then();
  }
}
