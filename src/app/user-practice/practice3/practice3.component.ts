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
  start = '开始';
  reset = '停止';
  public data = 0;
  public m = 1;
  public sub;

  onStart(){
    const timeNow = interval(1000);
    if(this.start === '开始'){
      this.sub = timeNow.subscribe(n => this.data += this.m);
      this.start = '暂停';
    }else if(this.start === '暂停'){
          this.sub.unsubscribe();
          let m =0;
          this.sub = timeNow.subscribe(n => this.data += m);
          this.start = '继续';
    }else if(this.start === '继续'){
      this.sub = timeNow.subscribe(n => this.data += this.m);
      this.start = '暂停';
    }
  }

  onReset(){
    this.sub.unsubscribe();
    this.start = '开始';
    this.data = 0;
  }
}

