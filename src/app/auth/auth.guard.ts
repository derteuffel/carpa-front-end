import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserDetail} from '../users/user-details/user-detail';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser: UserDetail;

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService){
    this.tokenStorage.getUser().subscribe(
      data => {
        this.currentUser = data;
      }
    );
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.currentUser) {
      if(next.data.roles && next.data.roles.indexOf(this.currentUser.roles) === -1){
        this.router.navigateByUrl('/401');
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
