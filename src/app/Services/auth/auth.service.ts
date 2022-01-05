import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: "root"
})
export class AuthService implements CanActivate {
    constructor(private router: Router, private userService: UserService) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        try {
            const currentUserId = localStorage.getItem('currentUser')
            if (this.userService.getUserById(currentUserId) != null) {
                return true;
            } else {
                this.router.navigate(["login"]);
                localStorage.removeItem("currentUser");
                return false;
            }
        } catch {
            this.router.navigate(["login"]);
            localStorage.removeItem("currentUser");
        }
    }
}