import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean  {
    return new Promise(
      (resolve, reject) => {
        resolve(this.authService.isAuthenticated());
        reject(console.log('You are not logged in'));
      }
    )
  }
}
