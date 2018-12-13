import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public practice = true;
  constructor(){
    if(localStorage.getItem(('user'))){
        this.practice = true;
    }else{
        this.practice = false;
    }
  }

}


