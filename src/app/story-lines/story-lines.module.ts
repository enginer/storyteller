import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoryLinesPageRoutingModule } from './story-lines-routing.module';

import { StoryLinesPage } from './story-lines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoryLinesPageRoutingModule
  ],
  declarations: [StoryLinesPage]
})
export class StoryLinesPageModule {}
