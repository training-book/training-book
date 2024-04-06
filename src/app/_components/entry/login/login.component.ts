import { Component, OnInit } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { ILoginCredentials } from 'src/app/_interface/LoginCredentials.interface';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastMessageService } from 'src/app/_services/toast-message.service';
import { NgIf } from '@angular/common';
import Validation from 'src/app/_helpers/password.validation';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class LoginComponent implements OnInit {

  errorLogin: boolean = false;
  errorLoginMessage: string = "";
  loginForm = new FormGroup(
    {
      mail: new FormControl<string>('', [
        Validators.required, 
        Validators.email
      ]),
      password: new FormControl<string>('', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(32),
        Validators.pattern(Validation.upperLowerSymbolNumberRegex)
      ])
    }
  );
  showPassword: boolean = false;


  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private modalControl: ModalController,
    private toastMessageService: ToastMessageService
  ) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  login() {

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

  async createAcount() {
    const singupModal = await this.modalControl.create({
      component: SignupComponent
    })

    await singupModal.present()
  }


}
