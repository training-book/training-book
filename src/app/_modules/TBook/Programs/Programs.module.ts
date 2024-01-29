import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgramsPage } from './Programs.page';

import { ProgramsPageRoutingModule } from './Programs-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProgramsPageRoutingModule
  ],
  declarations: [ProgramsPage]
})
export class ProgramsPageModule {}
