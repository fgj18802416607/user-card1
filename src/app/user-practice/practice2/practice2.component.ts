import { Component, OnInit } from '@angular/core';
import { GlobalMoodService } from './global-mood.service';
import { MomentMoodService } from './moment-mood.service';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {

  constructor(private gmood: GlobalMoodService,
              private mmood: MomentMoodService
  ) { }
  Gmood = [];
  Mmood = [];
  m = 0;

  ngOnInit() {
    this.Gmood = this.gmood.Gmood;
  }
  onGmoodClick() {
    const random: number = Math.floor(Math.random() * 5);
    this.Gmood[this.gmood.n] = this.gmood.MoodBase[random];
    if(this.gmood.n<5){
      this.gmood.n++;
    }
  }

  onMmoodClick() {
    const random: number = Math.floor(Math.random() * 5);
    this.Mmood[this.m] = this.mmood.Mmood[random];
    if(this.m<5){
      this.m++;
    }
  }

}
