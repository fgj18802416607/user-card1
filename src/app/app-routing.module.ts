import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserReviseComponent } from './user-revise/user-revise.component';
import { HomeComponent } from './home/home.component';
import { RouteguardService } from "./routeguard.service";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'register', component: UserRegisterComponent,
    canDeactivate:[RouteguardService]},
  { path: 'userRevise', component: UserReviseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
