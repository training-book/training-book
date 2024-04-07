import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../_services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean {
    const token = this.tokenService.isLogged();
    if (token) {
      console.log(token)
      return true;
    } else {
      console.log(token)
      this.router.navigate(['/login']);
      return false;
    }
  }
}