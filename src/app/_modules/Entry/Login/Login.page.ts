import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICredentials } from 'src/app/_interface/credentials.interface';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'Login',
  templateUrl: 'Login.page.html',
  styleUrls: ['Login.page.scss']
})
export class LoginPage implements OnInit {

  credentials:ICredentials= {
    mail: "",
    pwd: ""
  }
  constructor(private userService: UserService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.userService.checkApi()
  }

  login(){
    this.userService.login(this.credentials).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(response.user))
        this.tokenService.saveToken(response.token)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  createAcount(){

  }


}
