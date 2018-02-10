import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavbarComponent} from "./navbar/navbar.component";
import {MaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

const components = [
  NavbarComponent
];



@NgModule({
  declarations: components,
  imports: [MaterialModule, RouterModule],
  exports: [components],
})
export class SharedModule { }
