import { Component } from '@angular/core';
import { TokenService } from './_services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private tokenService: TokenService, router:Router) {
    const token = this.tokenService.isLogged();

    if(token){
      router.navigateByUrl('tabs');
    }else{
      router.navigateByUrl('login');

    }
  }
}
