import { Component} from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  user: User = new User();

  constructor(private router: Router){
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  public onSave() {
    const user = JSON.stringify(this.user);
    localStorage.setItem('user', user);
    this.router.navigate(['']);
  }

  public onCancel() {
    alert('尊敬的用户，您确认要关闭 ? ');
    const user = JSON.stringify(this.user);
    localStorage.key(0);
    this.router.navigate(['']);
  }

}
