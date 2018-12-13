import { Component, OnInit } from '@angular/core';
import { GlobalMoodService } from './global-mood.service';
import { MomentMoodService } from './moment-mood.service';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {

  constructor(private glomood: GlobalMoodService,
              private monmood: MomentMoodService
  ) { }

  GLBmood = [];
  MONmood = [];

  ngOnInit() {
    this.GLBmood = this.glomood.GLBmood;
  }

  onGLBmoodClick() {
    const random: number = Math.floor(Math.random() * 5);
    this.GLBmood.push(this.glomood.MoodBase[random]);
  }

  onMONmoodClick() {
    const random: number = Math.floor(Math.random() * 5);
    this.monmood.thisMmood();
    this.MONmood.push(this.monmood.MONmood[random]);
  }
}
