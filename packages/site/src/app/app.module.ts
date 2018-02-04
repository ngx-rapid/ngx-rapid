import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SampleModule} from '@ngx-rapid/core';
import {FormModule} from '@ngx-rapid/form';
import {CrudModule} from '@ngx-rapid/crud';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MaterialModule} from './shared/material.module';
import {NavbarComponent} from "./shared/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SampleModule,
    FormModule,
    CrudModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
