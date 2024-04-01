import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, window } from 'rxjs';
import { IUser } from '../_interface/user.interface';
import { TokenService } from './token.service';
import { ISignupCredentials } from '../_interface/SignupCredentials.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  private AuthenticatedUser:BehaviorSubject<boolean>
  private AuthenticatedUser$:Observable<boolean>

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.apiUrl = environment.apiUrl;
    this.AuthenticatedUser = new BehaviorSubject<boolean>(false); 
    this.AuthenticatedUser$ = this.AuthenticatedUser.asObservable()
  }

  login(credentials: {mail:string, password:string}):Observable<{token:string,user:IUser}> {
    return this.http
      .post<{token:string, user:IUser}>(`${this.apiUrl}/auth/authenticate`, credentials );
  }

  signup(sgnupCredentials:ISignupCredentials){
    return this.http
    .post(`${this.apiUrl}/auth/signup`, sgnupCredentials );
  }

  logout():void{
    localStorage.removeItem('user');
    this.tokenService.removeToken();
  }

  checkApi(){
    return this.http.get(`${this.apiUrl}/api`).subscribe((res)=>console.log(res))
  }
}