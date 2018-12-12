import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserReviseComponent } from './user-revise/user-revise.component';
import { HomeComponent } from './home/home.component';
import { RouteguardService } from "./routeguard.service";
import { DefaultguardService } from "./defaultguard.service";
import { UserPracticeComponent } from './user-practice/user-practice.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate:[DefaultguardService]},
  { path: 'register', component: UserRegisterComponent,
    canDeactivate:[RouteguardService],canActivate:[DefaultguardService]},
  { path: 'userRevise', component: UserReviseComponent,canActivate:[DefaultguardService]},
  { path: 'userPractice', component: UserPracticeComponent,canActivate:[DefaultguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
