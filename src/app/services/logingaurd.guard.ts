import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  LogingaurdGuard {
    constructor(private route: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): | boolean {
        {
            if (localStorage.getItem('user') === null) {
                this.route.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        }
    }
}
// export class LogingaurdGuard implements  {}
