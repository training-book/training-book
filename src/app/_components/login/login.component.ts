import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ILoginCredentials } from 'src/app/_interface/LoginCredentials.interface';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';
import { SignupComponent } from './signup/signup.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastMessageService } from 'src/app/_services/toast-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  errorLogin:boolean = false;
  errorLoginMessage:string = "";
  loginForm = new FormGroup({
    mail: new FormControl<string>('', [Validators.required, Validators.email]),
    pwd: new FormControl<string>('', [Validators.required, Validators.minLength(3)])
  });
  constructor(
              private userService: UserService, 
              private tokenService: TokenService,    
              private modalControl: ModalController,
              private toastMessageService: ToastMessageService
    ) {}

  ngOnInit(): void {
    this.userService.checkApi()
  }

  login(){

    const loginCredentials = this.loginForm.value as ILoginCredentials;
    this.userService.login(loginCredentials).subscribe({
      next: (response) => {
        this.errorLogin = false;
        localStorage.setItem('user', JSON.stringify(response.user))
        this.tokenService.saveToken(response.token)
      },
      error: (error) => {
        const errorMessage = error.error.error;
        console.log(error)
        this.errorLogin = true;
        this.toastMessageService.presentToast(
          'bottom',
          errorMessage,
          'danger',
        )
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
