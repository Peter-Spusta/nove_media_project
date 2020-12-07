import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  {
    path: 'tutorial-component',
    component: TutorialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
