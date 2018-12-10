import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-revise',
  templateUrl: './user-revise.component.html',
  styleUrls: ['./user-revise.component.css']
})
export class UserReviseComponent {
  public user: User = new User();
  constructor (private router: Router) {
    if (!localStorage.getItem(('user'))) {
      this.router.navigate(['/register']);
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
  onUpdate() {
    this.router.navigate(['/register']);
  }
}
