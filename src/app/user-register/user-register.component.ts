import { Component,OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { RouteguardService } from "../routeguard.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit,OnChanges{
  user: User = new User();
  public ok = false;
  constructor(private router: Router,
              private regsiterguard: RouteguardService,){
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.user.gender='男';
  }

  public onSave() {
    const user = JSON.stringify(this.user);
    localStorage.setItem('user', user);
    this.router.navigate(['/userRevise'], { replaceUrl: true });
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && changes['user'].currentValue) {
      this.ok = false;
    }
  }

  public onCancel() {
    if(localStorage.getItem('user')){
      const person = JSON.parse(localStorage.getItem('user'));
      if(person.name !== this.user.name||person.age !== this.user.age||person.gender! == this.user.gender||person.address !== this.user.address||person.tel !== this.user.tel){
        this.regsiterguard.num = 1;
      }
      localStorage.key(0);
      this.router.navigate(['/userRevise']);
    }else{
      return false;
    }

  }

  ngOnInit() {
    const person = localStorage.getItem('user');
    this.regsiterguard.num = 0;
    if (person) {
      this.user = JSON.parse(person);
      this.ok = false;
    } else {
      this.ok = true;
    }
  }
}
