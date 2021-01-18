import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  password: string;
}
export interface Conversation{
  conversationId:Number;
  userId: string;
  content:string;
  date:string;
  codeConversation:string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  BASE_PATH = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getUserList(): Observable<Array<User>> {
    console.log(1)
    return this.http.get<Array<User>>(this.BASE_PATH + "/user/all");
  }
  getUser(username: string):Observable<User> {
    return this.http.get<User>(this.BASE_PATH+"/user/get/"+username);
    }
  getFriendList(userId: any): Observable<Array<Conversation>> {
    return this.http.get<Array<Conversation>>(this.BASE_PATH+"/user/getConversation/"+userId);//
  }
  /*
   getFriendList(username: string): Observable<Array<Conversation>> {
    return this.http.get<Array<Conversation>>(`${this.BASE_PATH}/user/getConversation/${username}`);
  }
  */

// component get user đâu? build lại back di mở postman test cái login trc đi


}
