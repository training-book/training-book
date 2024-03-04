import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() titlePage: any;
  userName: string;
  constructor(private userService: UserService) {
    this.userName = JSON.parse(localStorage.getItem('user')!).userName;
  }
  ngOnInit(): void {
    // this.userName = 'opheli'
  }

  ngOnChanges(): void {

  }

  logout(){
    this.userService.logout();
  }

}
