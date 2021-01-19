import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  password: string;
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
      this.BASE_PATH + '/user/getConversation/' + userId
    );
  }
  getContentConversation(
    idConversatioin: Number
  ): Observable<Array<Conversation>> {
    return this.http.get<Array<Conversation>>(
      this.BASE_PATH + '/user/getContentConversation/' + idConversatioin
    );
  }
  postSendMessage(content: string, conversationId: string, userId: string) {
    var params = new HttpParams()
      .set('content', content)
      .set('conversationId', conversationId)
      .set('userId', userId);
    return this.http.post<Response>(
      this.BASE_PATH + '/uses/sendMessage',
      params,
      {
        observe: 'response',
      }
    );
  }

  getSearchUser(username: string): Observable<User> {
    return this.http.get<User>(this.BASE_PATH + '/user/searchUser/' + username);
  }

  postCreateNewConversation(userId1: string, userId2: string) {
    /*
    var params = new HttpParams()
      .set('userId1', userId1)
      .set('userId2', userId2);
      */
    return this.http.post<Response>(
      this.BASE_PATH + '/createSingleConversation/'+userId1+'/'+userId2,
      {
        observe: 'response',
      }
    );
  }

}
