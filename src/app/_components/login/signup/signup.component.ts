import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ISignupCredentials } from 'src/app/_interface/SignupCredentials.interface';
import { UserService } from 'src/app/_services/user.service';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  readonly nameMask: MaskitoOptions = {
    mask: /^[a-zA-Z\s]{0,40}$/
  };

  readonly userNameMask: MaskitoOptions = {
    mask: /^[a-zA-Z0-9\s]{0,40}$/
  }

  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();

  signupForm = new FormGroup({
    userName: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    sex: new FormControl<string>('', [Validators.required]),
    birthday: new FormControl<string>('', Validators.required),

    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    mail: new FormControl<string>('', [Validators.required, Validators.email]),
    pwd: new FormControl<string>('', [Validators.required, Validators.minLength(3)])
  });
  constructor(private modalControl: ModalController,
    private userService: UserService
  ) { }

  ngOnInit() { }

  signup() {
    if (this.signupForm.valid) {
      const signupCredentials = this.signupForm.value as ISignupCredentials;
      this.userService.signup(signupCredentials).subscribe((res) => {
        console.log(res)
        if (res) {
          this.modalControl.dismiss({
            userAction: "signup"
          })
        }
      });
    }
  }

  closeModal() {
    this.modalControl.dismiss({
      userAction: "back"
    })
  }
  
}
