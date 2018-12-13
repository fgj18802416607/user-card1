import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})

export class Practice3Component implements OnInit {

  public today;
  constructor() { }

  ngOnInit() {
    // let today1 = new Date().toLocaleDateString();
    // let today2 = new Date().toTimeString().slice(0, 8);
    // this.today = today1 + " " +today2;
    //secondsCounter
    this.today =new Date();
    const timeNow = interval(1000);
    timeNow.subscribe(n => this.today = new Date());
  }
}

