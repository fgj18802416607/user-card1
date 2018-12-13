import { Component, OnInit } from '@angular/core';
// import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit {

  public today;

  constructor() { }
  ngOnInit() {
    let today1 = new Date().toLocaleDateString();
    let today2 = new Date().toTimeString().slice(0,8);
    this.today = today1 +" "+ today2;
    console.log(today1);
    console.log(today2);
  }

}
