import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyUserComponent } from './my-user/my-user.component';
import { SearchComponent } from './search/search.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { MatCardModule  } from '@angular/material/card';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterAccountComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'task-detail', component: TaskDetailComponent },

  { path: 'home-page', component: HomePageComponent },
  { path: 'list-friends', component: ListFriendsComponent },
  { path: 'my-user', component: MyUserComponent },
  { path: 'search', component: SearchComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterAccountComponent,
    TaskDetailComponent,
    PageNotFoundComponent,
    CustomerComponentComponent,
    ForgotpasswordComponent,
    HomePageComponent,
    MyUserComponent,
    SearchComponent,
    ListFriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
