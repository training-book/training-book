import { Component } from '@angular/core';

@Component({
  selector: 'app-muscle-group',
  templateUrl: './muscle-group.component.html',
  styleUrls: ['./muscle-group.component.scss']
})
export class MuscleGroupComponent {

  muscleGroup = [
    {
      id: 1,
      name : 'Bras',
      img : "blob"
    },
    {
      id: 2,
      name : 'Quadriceps',
      img : "blob"
    },
    {
      id: 3,
      name : 'Ishio',
      img : "blob"
    },
    {
      id: 4,
      name : 'Dos',
      img : "blob"
    },
    {
      id: 5,
      name : 'Pectoraux',
      img : "blob"
    },
    {
      id: 6,
      name : 'Mollet',
      img : "blob"
    }
    
  ]
}
