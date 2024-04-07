import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string;
  private AuthenticatedUser:BehaviorSubject<boolean>
  private AuthenticatedUser$:Observable<boolean>

  constructor(private http :HttpClient) { 
    this.apiUrl = environment.apiUrl;
    this.AuthenticatedUser = new BehaviorSubject<boolean>(false); 
    this.AuthenticatedUser$ = this.AuthenticatedUser.asObservable()
  }

  changePassword(newPassword:any){
    return this.http.put(`${this.apiUrl}/api/user/changePassword`, newPassword)
  }
}
