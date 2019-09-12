import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LogingaurdGuard} from './logingaurd.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): | boolean {
      {
        if ((localStorage.getItem('user')  || localStorage.getItem('guest')) == null) {
            this.route.navigate(['/login']);
            return false;
         } else {
             return true;
        }
    }
  }
}

