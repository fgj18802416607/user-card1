import { Injectable } from '@angular/core';
import { Subscription, interval} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Practice3Service{

  constructor() { }

  start = '开始';
  reset = '停止';
  public data = 0;
  public m = 1;
  public sub: Subscription;
  public onreset = true;

  onStart(){
    if(this.start === '开始'){
      this.sub = interval(1000).subscribe(n => this.data += this.m);
      this.start = '暂停';
      this.onreset = false;
    }else if(this.start === '暂停'){
      this.sub.unsubscribe();
      let m =0;
      this.sub = interval(1000).subscribe(n => this.data += m);
      this.start = '继续';
    }else if(this.start === '继续'){
      this.sub = interval(1000).subscribe(n => this.data += this.m);
      this.start = '暂停';
    }
  }

  onReset(){
    this.start = '开始';
    this.data = 0;
    this.onreset = true;
    this.sub.unsubscribe();
  }
}
