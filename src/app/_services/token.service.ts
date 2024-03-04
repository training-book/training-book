import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token:string){
    sessionStorage.setItem('token', JSON.stringify(token))
    this.router.navigateByUrl('tabs').then(()=> {
      window.location.reload()
    })
  }

  isLogged():boolean{
    const token = sessionStorage.getItem('token');
    return !! token;
  }
}
