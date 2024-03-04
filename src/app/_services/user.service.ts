import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IUser } from '../_interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  private AuthenticatedUser:BehaviorSubject<boolean>
  private AuthenticatedUser$:Observable<boolean>

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.AuthenticatedUser = new BehaviorSubject<boolean>(false); 
    this.AuthenticatedUser$ = this.AuthenticatedUser.asObservable()
  }

  login(credentials: {mail:string, pwd:string}):Observable<{token:string,user:IUser}> {
    return this.http
      .post<{token:string, user:IUser}>(`${this.apiUrl}/api/users/authenticate`, credentials );
  }

  checkApi(){
    return this.http.get(`${this.apiUrl}/api`).subscribe((res)=>console.log(res))
  }
}