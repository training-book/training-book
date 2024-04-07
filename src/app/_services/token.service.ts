import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token:string){
    sessionStorage.setItem('token', token)
    this.router.navigateByUrl('tabs')
  }

  removeToken(){
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('login')
  }

  isLogged():boolean{
    const token = sessionStorage.getItem('token');
    return !! token;
  }

  getToken(){
    const token =sessionStorage.getItem('token');
    return token;
  }
}
