import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AdminSevice implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router) {}

    canActivate(){
        const user = this.auth.getUserDetails()
        if (user.name!=='admin') {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
   
}