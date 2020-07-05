import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryLinesPage } from './story-lines.page';

const routes: Routes = [
  {
    path: '',
    component: StoryLinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryLinesPageRoutingModule {}
