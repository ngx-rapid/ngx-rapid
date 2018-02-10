import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {MaterialModule} from './material.module';
import {RouterModule} from '@angular/router';

const components = [
  NavbarComponent
];



@NgModule({
  declarations: components,
  imports: [MaterialModule, RouterModule],
  exports: [components],
})
export class SharedModule { }
