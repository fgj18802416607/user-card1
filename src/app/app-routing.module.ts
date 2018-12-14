import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserReviseComponent } from './user-revise/user-revise.component';
import { HomeComponent } from './home/home.component';
import { RouteguardService } from "./routeguard.service";
import { DefaultguardService } from "./defaultguard.service";
import { UserPracticeComponent } from './user-practice/user-practice.component';
import { Practice1Component } from './user-practice/practice1/practice1.component';
import { Practice2Component } from './user-practice/practice2/practice2.component';
import { Practice3Component } from './user-practice/practice3/practice3.component';
import { Practice4Component } from './user-practice/practice4/practice4.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent,canActivate:[DefaultguardService]},
  { path: 'register', component: UserRegisterComponent,
    canDeactivate:[RouteguardService],canActivate:[DefaultguardService]},
  { path: 'userRevise', component: UserReviseComponent,canActivate:[DefaultguardService]},
  { path: 'userPractice', children: [
    {
      path: 'practice1',
      component: Practice1Component
    },
    {
      path: 'practice2',
      component: Practice2Component
    },
    {
      path: 'practice3',
      component: Practice3Component
    },
    {
      path: 'practice4',
      component: Practice4Component
    }],component: UserPracticeComponent,canActivate:[DefaultguardService]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
