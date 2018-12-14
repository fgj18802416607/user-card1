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
import { MultiplePipe } from './pipe/multiple.pipe';
import { Practice1Component } from './user-practice/practice1/practice1.component';
import { Practice2Component } from './user-practice/practice2/practice2.component';
import { Practice3Component } from './user-practice/practice3/practice3.component';
import { Practice4Component } from './user-practice/practice4/practice4.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserReviseComponent,
    HomeComponent,
    UserPracticeComponent,
    MultiplePipe,
    Practice1Component,
    Practice2Component,
    Practice3Component,
    Practice4Component,
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
