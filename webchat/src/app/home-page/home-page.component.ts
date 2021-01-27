import { AuthService } from './../auth.service';
import { DataService, Conversation, User, UserOnly } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { WebSocketAPI } from 'src/app/WebSocketAPI';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  [x: string]: any;
  constructor(
    // private fb: FormBuilder,
    private dataService: DataService,
    private authService: AuthService,
    // private router: Router,
  ) {}

  listFriend!: Conversation[];
  currentConversation!: Conversation[];
  idConversation!: Number;
  content!: string;
  conversationId!: Number;
  codeConversation!: string;
  userId!: string;
  content!: string;
  searchListFriend!: Conversation[];
  listUser!: UserOnly[];
  ngOnInit(): void {
    this.webSocketAPI = new WebSocketAPI(this,this.authService);
    this.getListFriend();
    this.connect();
    // this.getConversationContent(
    //   this.idConversation,
    //   this.codeConversation,
    //   this.userId,
    //   this.content
    // );
    this.getListUser();
  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send(this.conversationId);
  }

  handleMessage(message:any){
    this.greeting = message;
  }

  getListFriend() {
    this.dataService
      .getFriendList(this.authService.getLoggedInUserName())
      .subscribe((data: Array<Conversation>) => (this.listFriend = data));
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
    this.content = content;
  }

  getConversationContent2(idConversation: string) {
    this.dataService
      .getContentConversation(Number(idConversation))
      .subscribe(
        (data: Array<Conversation>) => (this.currentConversation = data)
      );
    this.conversationId = Number(idConversation);
    this.codeConversation = this.currentConversation[0].codeConversation;
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
          this.getListFriend();
          this.ngOnInit();
        } else {
          alert('Send not ok');
        }
      });
  }
  // Search(res: string) {
  //   this.searchListFriend = this.listFriend.filter((res) => {
  //     res.codeConversation
  //       .toLocaleUpperCase()
  //       .match(this.codeConversation.toLocaleLowerCase());
  //   });
  // }

  // getListUser() {
  //   this.dataService
  //     .getUserList()
  //     .subscribe((data: Array<User>) => (this.listUser = data));
  // }
  getSearch(textSearch: string) {
    this.dataService
      .getSearchUser(textSearch)
      .subscribe((data: Array<UserOnly>) => {
        return (this.listUser = data);
      });

  }
}
