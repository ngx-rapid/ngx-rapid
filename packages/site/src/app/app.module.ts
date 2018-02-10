import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SampleModule} from '@ngx-rapid/core';
import {FormModule} from '@ngx-rapid/form';
import {CrudModule} from '@ngx-rapid/crud';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from './shared/shared.module';
import {MaterialModule} from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    SharedModule,
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
