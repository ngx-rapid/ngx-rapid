import { NgModule } from '@angular/core';

import {CrudComponent} from "./crud.component";

import {FormModule} from '@ngx-rapid/form';
/**
 * This is sample documentation
 */

@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [FormModule],
  exports: [CrudComponent],
  providers: []
})
export class CrudModule { }
