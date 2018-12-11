// import {CanActivate} from "@angular/router";
import {CanDeactivate} from "@angular/router";
import { UserRegisterComponent } from './user-register/user-register.component';


// export class RouteguardService implements CanActivate{
//   canActivate(){
//     return window.confirm("是否进入");
//   }
// }
export class RouteguardService implements CanDeactivate<UserRegisterComponent> {
  public num: number;
  canDeactivate(component: UserRegisterComponent) {
    if (this.num) {
      return window.confirm('你还没有保存，确定要离开吗？');
    }else{
      return true;
    }
  }
}
