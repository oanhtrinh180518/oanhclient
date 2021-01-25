import { AuthService } from './../auth.service';
import { DataService, Conversation, User } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  [x: string]: any;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {}

  listFriend!: Conversation[];
  currentConversation!: Conversation[];
  idConversation!: Number;
  content!: string;
  conversationId!: Number;
  codeConversation!: string;
  userId!: string;
  content!: string;

  ngOnInit(): void {
    this.getListFriend();

    this.getConversationContent(
      this.idConversation,
      this.codeConversation,
      this.userId,
      this.content
    );
  }

  getListFriend() {
    this.dataService
      .getFriendList(this.authService.getLoggedInUserName())
      .subscribe((data: Array<Conversation>) => (this.listFriend = data));
    console.log('sontestFriend', this.listFriend);
  }

  getConversationContent(
    idConversation: Number,
    codeConversation: string,
    userId: string,
    content: string
  ) {
    this.dataService
      .getContentConversation(idConversation)
      .subscribe(
        (data: Array<Conversation>) => (this.currentConversation = data)
      );
    this.conversationId = idConversation;
    this.codeConversation = codeConversation;
    this.userId = userId;
    this.content=content;
  }
  postMessage(content: string) {
    this.dataService
      .postSendMessage(content, this.conversationId)
      .subscribe((response) => {
        var code = response.status;
        if (code == 200) {
          this.getConversationContent(
            this.conversationId,
            this.codeConversation,
            this.userId,
            this.content
          );
        } else {
          //this.getConversationContent(this.conversationId);
          alert('Send not ok');
        }
      });
  }
}
