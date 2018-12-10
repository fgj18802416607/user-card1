import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserReviseComponent } from './user-revise/user-revise.component';


const routes: Routes = [
  { path: 'register', component: UserRegisterComponent },
  { path: '', component: UserReviseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
