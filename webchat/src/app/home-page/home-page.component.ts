import { AuthService } from './../auth.service';
import { DataService, Conversation, User } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {}

  listFriend!: Conversation[];
  users!: User[];
  currentConversation!: Conversation;
  ngOnInit(): void {
    this.getListFriend(); // nay m goi  ham  nay đúng mà
    this.getListUsers(); //gọi hàm này mới đúng- ko, t muốn hiển thị danh sách bạn bè của user mà
    //this.getConversationContent(this.listFriend[0].conversationId)
  }

  getListFriend() {
    this.dataService
      .getFriendList(this.authService.getLoggedInUserName())
      .subscribe((data: Array<Conversation>) => (this.listFriend = data));
    console.log('sontestFriend', this.listFriend);
  }
  getListUsers() {
    this.dataService
      .getUserList()
      .subscribe((data: Array<User>) => (this.users = data));
    console.log('sontestUser', this.users);
  }
  getConversationContent(idConversatioin: Number){
    this.dataService.getContentConversation(idConversatioin)
    .subscribe((data: Conversation ) => this.currentConversation = data)
  }
}
