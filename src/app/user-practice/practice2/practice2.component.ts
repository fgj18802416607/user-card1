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


  ngOnInit() {
  }


}
