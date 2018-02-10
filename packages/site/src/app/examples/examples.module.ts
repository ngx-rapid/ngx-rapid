import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';
import {RouterModule} from '@angular/router';
import {IndexQuickstartComponent} from './index-quickstart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ExamplesComponent,
        children: [
          {path: '', pathMatch: 'full', redirectTo: 'quickstart'},
          {path: 'quickstart', component: IndexQuickstartComponent}
        ]
      }
    ]),

  ],
  declarations: [ExamplesComponent, IndexQuickstartComponent]
})
export class ExamplesModule {
}
