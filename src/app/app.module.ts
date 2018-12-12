import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserReviseComponent } from './user-revise/user-revise.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {RouteguardService} from "./routeguard.service";
import { UserPracticeComponent } from './user-practice/user-practice.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserReviseComponent,
    HomeComponent,
    UserPracticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RouteguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
