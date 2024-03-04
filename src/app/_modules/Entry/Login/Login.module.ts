import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './Login.page';
import { LoginPageRoutingModule } from './Login-routing.module';
import { LoginComponent } from 'src/app/_components/login/login.component';
import { SignupComponent } from 'src/app/_components/login/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    MaskitoDirective
  ],
  declarations: [LoginPage, LoginComponent, SignupComponent]
})
export class LoginPageModule {}
