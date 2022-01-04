import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
    providedIn: "root"
})
export class AuthService implements CanActivate {
    constructor(private router: Router, private localStorage: LocalStorageService) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        try {
            const currentUserId = localStorage.getItem('currentUser')
            if (this.localStorage.getUserById(currentUserId) != null) {
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