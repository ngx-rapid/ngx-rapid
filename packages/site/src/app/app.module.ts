import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SampleModule} from '@ngx-rapid/core';
import {FormModule} from '@ngx-rapid/form';
import {CrudModule} from '@ngx-rapid/crud';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleModule,
    FormModule,
    CrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
