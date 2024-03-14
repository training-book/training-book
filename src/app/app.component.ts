import { Component } from '@angular/core';
import { TokenService } from './_services/token.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonicModule    
  ],
  standalone: true
})
export class AppComponent {
  constructor(
    private tokenService: TokenService, 
    private router:Router
    ) {
    const token = this.tokenService.isLogged();

    if(token){
      this.router.navigateByUrl('tabs');
    }else{
      this.router.navigateByUrl('login');

    }
  }
}
