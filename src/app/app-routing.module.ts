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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent,canActivate:[DefaultguardService]},
  { path: 'register', component: UserRegisterComponent,
    canDeactivate:[RouteguardService],canActivate:[DefaultguardService]},
  { path: 'userRevise', component: UserReviseComponent,canActivate:[DefaultguardService]},
  { path: 'userPractice', component: UserPracticeComponent,canActivate:[DefaultguardService]},
  { path: 'userPractice/practice1', component: Practice1Component },
  { path: 'userPractice/practice2', component: Practice2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
