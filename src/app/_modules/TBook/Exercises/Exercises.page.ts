import { Component } from '@angular/core';

@Component({
  selector: 'Exercises',
  templateUrl: 'Exercises.page.html',
  styleUrls: ['Exercises.page.scss']
})
export class ExercisesPage {

  inputSearch:string | undefined = "";
  placeholder:string | undefined;
  constructor() {
    if(this.inputSearch == ""){
      this.placeholder = "Rechercher un exercice."
    } 
  }

}
