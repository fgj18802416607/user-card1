import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  public gold :any="";
  constructor(private router: Router) {

  }

  // aaa(event){
  //   if(event.target.value){
  //     this.gold=event.target.value=parseFloat(event.target.value)
  //   }
  // }
  ngOnInit() {
  }

}
