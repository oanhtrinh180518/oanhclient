import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  password: string;
}
export interface UserOnly {
  user: string;
}
export interface Conversation {
  conversationId: Number;
  userId: string;
  content: string;
  date: string;
  codeConversation: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  BASE_PATH = 'http://localhost:8080';

  content!: string;
  conversationId!: Number;
  userId!: string;

  constructor(private http: HttpClient) {}

  getUserList(): Observable<Array<User>> {
    console.log(1);
    return this.http.get<Array<User>>(this.BASE_PATH + '/user/all');
  }
  getUser(username: string): Observable<User> {
    return this.http.get<User>(this.BASE_PATH + '/user/get/' + username);
  }

  getFriendList(userId: any): Observable<Array<Conversation>> {
    return this.http.get<Array<Conversation>>(
      this.BASE_PATH + '/user/getConversation/'
    );
  }
  getContentConversation(
    idConversatioin: Number
  ): Observable<Array<Conversation>> {
    return this.http.get<Array<Conversation>>(
      this.BASE_PATH + '/user/getContentConversation/' + idConversatioin
    );
  }
  getSearchUser(text: string): Observable<Array<UserOnly>> {
    return this.http.get<Array<UserOnly>>(this.BASE_PATH + '/user/searchUser/' + text);
  }
  postSendMessage(content: string, conversationId: Number) {
    var params = new HttpParams()
      .set('content', content)
      //@ts-ignore
      .set('conversationId', conversationId);
      var user={content:content,conversationId:conversationId,userId:''}
    return this.http.post<Response>(
      this.BASE_PATH + '/user/sendMessage',
      user,
      {
        observe: 'response',
      }
    );
  }



  postCreateNewConversation(userId: string) {
    /*
    var params = new HttpParams()
      .set('userId1', userId1)
      .set('userId2', userId2);
      */
    return this.http.post<Response>(
      this.BASE_PATH + '/createSingleConversation/'+userId,
      {
        observe: 'response',
      }
    );
  }

}
