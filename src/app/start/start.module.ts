import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full',
      },
      { path: 'start', component: StartPageComponent },
    ]),
  ],
})
export class StartModule {}
