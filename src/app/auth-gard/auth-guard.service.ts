import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // L'utilisateur est authentifié, autorise l'accès à la route
    } else {
      // L'utilisateur n'est pas authentifié, redirige vers la page de connexion
      this.router.navigate(['/login']);
      return false; // Bloque l'accès à la route
    }
  }
}
