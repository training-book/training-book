import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  titlePage: any;
  constructor(private router: Router) {
    console.log(this.router.url)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        // console.log('NavigationStart', event.url);
      }
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        console.log('NavigationEnd', event.url);
        if (event.url.includes('home')) {
          this.titlePage = "Acceuil"
        } else if (event.url.includes('programs')) {
          this.titlePage = "Programmes"
        } else if (event.url.includes('exercises')) {
          this.titlePage = "Exercices"
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        // console.log("NavigationError", event.error);
      }
    });
  }

}
