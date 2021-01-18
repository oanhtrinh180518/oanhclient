import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css'],
})
export class RegisterAccountComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthService
  ) {}
  registerForm = this.fb.group({
    username: [''],
    password: [''],
  });
  ngOnInit() {}
  onBack() {
    this.router.navigate(['/login']);
  }
  onHome(){
    this.router.navigate(['/home-page']);
  }
  register() {
    this.authenticationService
      .register(
        this.registerForm.value.username,
        this.registerForm.value.password
      )
      .subscribe(response => {
        var code = response.status;
        if (code == 201) {
          this.router.navigate(['/login']);
        alert("sucess")
        }
        else {
          alert('Register not ok');
        }
      });
  }
}
