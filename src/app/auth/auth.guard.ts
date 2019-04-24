import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

import { MessageService } from "../message.service";
import { AppService } from "../app.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private messageService: MessageService,
    private router: Router,
    private appService: AppService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  loginState: boolean;
  checkLogin(url: string): boolean {
    this.appService.checkLogin().subscribe(result => {
      this.loginState = result.state;
    });
    if (this.loginState) {
      return true;
    }

    //this.authService.redirectUrl = url;

    this.router.navigate(["/sendo"]);
    return false;
  }
}
