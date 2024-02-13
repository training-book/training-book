import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @Input()titlePage: any;
  constructor(){
   
  }

  ngOnChanges(): void {
    
  }

}
