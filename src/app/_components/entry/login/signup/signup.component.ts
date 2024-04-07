import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalController, IonicModule } from '@ionic/angular';
import { ISignupCredentials } from 'src/app/_interface/SignupCredentials.interface';
import { AuthService } from 'src/app/_services/auth.service';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';
import { ToastMessageService } from 'src/app/_services/toast-message.service';
import { MaskitoDirective } from '@maskito/angular';
import Validation from 'src/app/_helpers/password.validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MaskitoDirective,
  ],
})
export class SignupComponent implements OnInit {
  readonly nameMask: MaskitoOptions = {
    mask: /^[a-zA-Z\s]{0,40}$/
  };

  readonly userNameMask: MaskitoOptions = {
    mask: /^[a-zA-Z0-9\s]{0,40}$/
  }

  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();

  signupForm = new FormGroup(
    {
      userName: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      sex: new FormControl<string>('', [Validators.required]),
      birthday: new FormControl<string>('', Validators.required),
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      mail: new FormControl<string>('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
        Validators.pattern(Validation.upperLowerSymbolNumberRegex)
      ]),
      confirmPassword: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
        Validators.pattern(Validation.upperLowerSymbolNumberRegex)
      ])
    },
    {
      validators: Validation.passwordMatch('password', 'confirmPassword')
    }
  );
  constructor(
    private modalControl: ModalController,
    private authService: AuthService,
    private toastMessageService: ToastMessageService
  ) { }

  ngOnInit() { }

  signup() {
    if (this.signupForm.valid) {
      const signupCredentials = this.signupForm.value as ISignupCredentials;
      this.authService.signup(signupCredentials).subscribe({
        next: (res: any) => {
          const succesMessage = res.message
          if (res) {
            console.log(res)
            this.toastMessageService.presentToast(
              'bottom',
              succesMessage,
              'success'
            )
            this.modalControl.dismiss({
              userAction: "signup"
            })
          }
        },
        error: (error) => {
          const errorMessage = error.error.error;
          this.toastMessageService.presentToast(
            'bottom',
            errorMessage,
            'danger'
          )

        }
      }
      );
    }
  }

  closeModal() {
    this.modalControl.dismiss({
      userAction: "back"
    })
  }

}
