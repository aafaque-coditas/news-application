import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  adminToken = '0987654321';
  constructor(private router: Router, private authService: NewsService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!!localStorage.getItem('adminToken')) {
      return true;
    } else {
      alert('Unauthorized user');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
