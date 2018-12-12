import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DefaultguardService implements CanActivate {

  constructor() { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {


    if (localStorage.getItem('user')) {
      if (state.url === '/userRevise') {
        return true;
      }else if(state.url === '/register?id=1'){
        return false;
      }
      return true;
    }
    else if(!localStorage.getItem('user')){
      if(state.url === '/home'){
        return true;
      }else if(state.url === '/userPractice'){
        return false;
      }
    }
    return true;
  }
}
