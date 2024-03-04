import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExercisesPage } from './Exercises.page';
import { ExercisesPageRoutingModule } from './Exercises-routing.module';
import { MuscleGroupComponent } from 'src/app/_components/muscle-group/muscle-group.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExercisesPageRoutingModule
  ],
  declarations: [ExercisesPage, MuscleGroupComponent]
})
export class ExercisesPageModule {}
