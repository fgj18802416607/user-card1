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
    }
    else if(!localStorage.getItem('user')){
      if(state.url === '/home'){
        return false;
      }else if(state.url === '/userPractice'){
        return false;
      }
    }
    return true;
    // if (state.url === '/register?id=1') {
    //   return true;
    //   if (localStorage.getItem('user')) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    // else if (state.url === '/userRevise') {
    //   // if (localStorage.getItem('user')) {
    //   //   return true;
    //   // } else {
    //   //   return false;
    //   // }
    //   return true;
    // }else if (state.url === '/register') {
    //   if(localStorage.getItem('user')){
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    // else if (state.url === '/home'){
    //   if(this.location.url === '/home'){
    //
    //   }
    // }
  }
}
