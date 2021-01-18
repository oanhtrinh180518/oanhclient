import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_PATH = 'http://localhost:8080';
  USER_NAME_SESSION = 'username_session';

  public username!: String;
  public password!: String;
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    var params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post<Response>(this.BASE_PATH + '/auth/login', params, {
      observe: 'response'
    });
  }
  register(user: String, pass: String) {
    return this.http.post<Response>(
      this.BASE_PATH + '/auth/register',
      { userId: user, password: pass },
      { observe: 'response' }
    );
  }

  createBasicAuthToken() {
    console.log(this.username + ':' + this.password);
    return 'Basic ' + window.btoa(this.username + ':' + this.password);
  }
  registerSuccessfulLogin(username: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION, username);
  }
  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION);
    this.username = '';
    this.password = '';
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION);
    if (user === null) return false;
    return true;
  }
  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION);
    if (user === null) return '';
    return user;
  }
}
