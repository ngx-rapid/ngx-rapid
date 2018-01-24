import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GuidesComponent } from './guides.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'getting-started' },
      { path: ':id', component: GuidesComponent },
    ]),
  ],
  declarations: [
    GuidesComponent,
  ],
})
export class GuidesModule { }
