import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ILoginCredentials } from 'src/app/_interface/LoginCredentials.interface';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';
import { SignupComponent } from './signup/signup.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  loginForm = new FormGroup({
    mail: new FormControl<string>('', [Validators.required, Validators.email]),
    pwd: new FormControl<string>('', [Validators.required, Validators.minLength(3)])
  });
  constructor(private userService: UserService, private tokenService: TokenService,     private modalControl: ModalController,
    ) {}

  ngOnInit(): void {
    this.userService.checkApi()
  }

  login(){

    const loginCredentials = this.loginForm.value as ILoginCredentials;
    this.userService.login(loginCredentials).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(response.user))
        this.tokenService.saveToken(response.token)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  async createAcount(){
    const singupModal = await this.modalControl.create({
      component : SignupComponent
    })

    await singupModal.present()
  }


}
