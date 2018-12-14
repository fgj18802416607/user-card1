import { Component, OnInit,OnDestroy} from '@angular/core';
import { interval,Subscription} from 'rxjs';
import { Practice3Service } from './practice3.service';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})

export class Practice3Component implements OnInit,OnDestroy{

  public today;
  public timeNow : Subscription;
  constructor(public practice3 : Practice3Service) { }

  ngOnInit() {
    this.today =new Date();
    this.timeNow = interval(1000).subscribe(n => {
      this.today = new Date()
    console.log('a');
    });
  }

  ngOnDestroy():void{
    this.timeNow.unsubscribe();
  }
}

