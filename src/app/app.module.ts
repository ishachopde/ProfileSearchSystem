import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import {ProfileComponent} from './components/profile.component';

@NgModule({
  declarations: [
    AppComponent, ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
