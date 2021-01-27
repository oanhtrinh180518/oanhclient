import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthService
  ) {}
  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;
  ngOnInit() {}
  login() {
    this.authenticationService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (response) => {
          var code = response.status;
          console.log('status code:' + code);
          if (code == 200) {
            this.invalidLogin = false;
            this.loginSuccess = true;
            this.successMessage = 'Login Successful.';
            this.authenticationService.username = this.loginForm.value.username;
            this.authenticationService.password = this.loginForm.value.password;
            this.authenticationService.registerSuccessfulLogin(
              this.loginForm.value.username,
              this.loginForm.value.password
            )
            this.router.navigate(['/home-page']);
          }
        },
        () => {
          this.invalidLogin = true;
          this.loginSuccess = false;
        }
      );
  }
}
