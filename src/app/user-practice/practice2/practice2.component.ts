import { Component, OnInit } from '@angular/core';
import { GlobalMoodService } from './global-mood.service';
import { MomentMoodService } from './moment-mood.service';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {

  constructor(private glbmood: GlobalMoodService,
              private monmood: MomentMoodService
  ) { }

  GLBmood = [];
  MONmood = [];
  m = 0;

  ngOnInit() {
  }
  onGLBmoodClick() {
    const random: number = Math.floor(Math.random() * 5);
    this.GLBmood[this.glbmood.n] = this.glbmood.MoodBase[random];
    if(this.glbmood.n<5){
      this.glbmood.n++;
    }
  }

  onMONmoodClick() {
    const random: number = Math.floor(Math.random() * 5);
    this.MONmood[this.m] = this.monmood.MONmood[random];
    if(this.m<5){
      this.m++;
    }
  }


}
