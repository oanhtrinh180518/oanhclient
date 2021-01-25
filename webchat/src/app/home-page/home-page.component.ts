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
  searchListFriend!: Conversation[];
  listUser!:User[];
  ngOnInit(): void {
    this.getListFriend();

    // this.getConversationContent(
    //   this.idConversation,
    //   this.codeConversation,
    //   this.userId,
    //   this.content
    // );
    this.getListUser();
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
    this.content = content;
  }
  getConversationContent2(
    idConversation: string,
  ) {
    this.dataService
      .getContentConversation(Number(idConversation))
      .subscribe(
        (data: Array<Conversation>) => (this.currentConversation = data)
      );
    this.conversationId =  Number(idConversation);
    this.codeConversation=this.currentConversation[0].codeConversation;
    console.log("conver-code",this.codeConversation);
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
          this.ngOnInit();
        } else {
          //this.getConversationContent(this.conversationId);
          alert('Send not ok');
        }
      });
  }
  Search(res:string) {
    this.searchListFriend = this.listFriend.filter((res) => {
       res.codeConversation.toLocaleUpperCase().match(this.codeConversation.toLocaleLowerCase());
      console.log('oanhcheck',this.searchListFriend);
    });
  }

  getListUser() {
    this.dataService
      .getUserList()
      .subscribe((data: Array<User>) => (this.listUser = data));
    console.log('sontestFriend', this.listUser);

  }
}
