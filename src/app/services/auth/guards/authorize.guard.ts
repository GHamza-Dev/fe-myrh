import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../storage/storage.service';
import { JwtTokenService } from '../jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {

  constructor(
    private storageService: StorageService,
    private jwtTokenService: JwtTokenService,
    private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("Inside auth guard");

    const token = this.storageService.get('token');

    if(!token) {
      this.router.navigateByUrl("/login");
      return false;
    }

    this.jwtTokenService.setToken(token);

    if(!this.jwtTokenService.getSubject()) {
      this.router.navigateByUrl("/login");
      return false;
    }

    if(this.jwtTokenService.isTokenExpired()){
      this.router.navigateByUrl("/login");
      return false;
    }

    return true;
  }

}
